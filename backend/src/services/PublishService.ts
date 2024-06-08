import { IMessage } from "@src/models/IMessage";
import UserService from "./UserService";
import { ChannelMapping } from "@src/services/channels/ChannelMapping";
import { IChanneOutput } from "@src/models/IChannelOutput";
import { INotification } from "@src/models/INotification";
import { getRandomInt } from "@src/util/misc";
import LogRepo from "@src/repos/LogRepo";
import DLQService from "@src/services/DLQService";

async function publish(message: IMessage): Promise<boolean> {
    const users = await UserService.getAll();
    let result: boolean = true;

    let notifications: INotification[] = [];
    for (const user of users.filter(user => user.subscribed[String(message.category)])) {
        const promises = user.channels.map(async (channel: string) => {
            if (ChannelMapping.mapping[channel]) {
                const output: IChanneOutput = await ChannelMapping.mapping[channel].send(message, user);
                const notification: INotification & IChanneOutput = {
                    id: getRandomInt(),
                    category: message.category,
                    user: user.email,
                    message: message.message,
                    sent: output.sent,
                    output: output.output,
                    date: new Date().getTime(),
                    channel: channel
                };

                if (!output.sent) {
                    result = false;
                    // Just simulating a DLQ for failed notifications.
                    DLQService.push(notification);
                }
                notifications.push(notification);
            }
        });

        await Promise.all(promises);
        await LogRepo.log(notifications);
        notifications = [];
    }
    
    return result;
}

export default {
    publish
} as const;
import { IMessage } from "@src/models/IMessage";
import IChannel from "./IChannel";
import { IUser } from "@src/models/User";
import { getRandomBoolean } from "@src/util/misc";
import { IChanneOutput } from "@src/models/IChannelOutput";

export class EmailChannelImp implements IChannel {
    async send(message: IMessage, user: IUser): Promise<IChanneOutput> {
        let sent;
        let output;

        try {
            // We will simulate either the message was sent successfully or not.
            sent = getRandomBoolean();
            output = sent ? "Email sent successfully!" : "Error while sending email. CODE: 123";
        } catch (error) {
            sent = false;
            output = `Error while sending email notification: ${error}`;
        }

        return {
            sent: sent,
            output: output
        };
    }
}
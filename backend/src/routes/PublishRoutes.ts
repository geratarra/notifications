import PublishService from "@src/services/PublishService";
import { IReq, IRes } from "./types/express/misc";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { IMessage } from "@src/models/IMessage";


async function publishMessage(req: IReq<{ message: IMessage }>, res: IRes) {
    const { message } = req.body;
    const publishedMessage = await PublishService.publish(message);
    return res.status(HttpStatusCodes.OK).json({
        success: publishedMessage,
        message: publishedMessage ? "The message was published successfully" : "The message couldn't be published " +
            "in at least one channel. Please check the logs."
    });
}

export default {
    publishMessage
} as const;
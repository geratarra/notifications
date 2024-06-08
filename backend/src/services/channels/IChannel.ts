import { IChanneOutput } from "@src/models/IChannelOutput";
import { IMessage } from "@src/models/IMessage";
import { IUser } from "@src/models/User";

export default interface IChannel {
    send(message: IMessage, user: IUser): Promise<IChanneOutput>;
}

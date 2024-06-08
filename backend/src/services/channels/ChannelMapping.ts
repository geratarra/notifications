import IChannel from "@src/services/channels/IChannel";
import { EmailChannelImp } from "@src/services/channels/EmailChannelImp";
import { SMSChannelImp } from "./SMSChannel";


export class ChannelMapping {
    static mapping: { [key: string]: IChannel } = {
        "email": new EmailChannelImp(),
        "sms": new SMSChannelImp()
    }
}
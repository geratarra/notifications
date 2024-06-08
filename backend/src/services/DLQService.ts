import { INotification } from "@src/models/INotification";

const deadLetterQueue = [];

const push = (notification: INotification) => {
    deadLetterQueue.push(notification);
}

export default {
    push
}
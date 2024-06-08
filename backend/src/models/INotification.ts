export interface INotification {
    id: number;
    category: string;
    message: string;
    user: string;
    date: number;
    channel: string;
    sent: boolean;
}
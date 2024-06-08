export default interface Log {
    id: number;
    category: string;
    message: string;
    user: string;
    date: number;
    channel: string;
    sent: boolean;
}
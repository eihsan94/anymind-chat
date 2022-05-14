export interface Message {
    messageId: string;
    datetime: string;
    text: string;
    userId: string;
}
export interface UnsentMessage extends Message {
    channelId: string;
}
export type Draft = Omit<UnsentMessage, "datetime">
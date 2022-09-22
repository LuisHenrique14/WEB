export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;
    

    constructor(content: string, username: string, userId: string, messageId: string){
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}

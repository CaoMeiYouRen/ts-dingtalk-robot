declare class MessageTemplateAbs {
    canAt: boolean;
    isAtAll: boolean;
    atMobiles: Set<string>;
    atDingtalkIds: Set<string>;
    msgtype: string;
    constructor();
    render(options: any): any;
    get(): void;
    toJsonString(): void;
    atAll(): this;
    atPhone(phones: string | string[]): this;
    atId(ids: string | string[]): this;
}
export { MessageTemplateAbs };

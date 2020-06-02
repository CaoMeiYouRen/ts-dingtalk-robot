import { MessageTemplateAbs } from './template';
declare class Link extends MessageTemplateAbs {
    title: string;
    messageUrl: string;
    picUrl?: string;
    text: string;
    constructor(content: any);
    setContent(content: string): this;
    setTitle(title: string): this;
    setImage(image: string): this;
    setUrl(url: string): this;
    get(): any;
}
export { Link };

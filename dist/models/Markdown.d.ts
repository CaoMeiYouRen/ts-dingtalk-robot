import { MessageTemplateAbs } from './template';
declare class Markdown extends MessageTemplateAbs {
    items: string[];
    title: string;
    constructor();
    setTitle(title: string): this;
    add(text: string | string[]): this;
    get(): any;
}
export { Markdown };

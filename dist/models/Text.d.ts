import { MessageTemplateAbs } from './template';
declare class Text extends MessageTemplateAbs {
    content: string;
    constructor(content: string);
    setContent(content: string): this;
    get(): any;
}
export { Text };

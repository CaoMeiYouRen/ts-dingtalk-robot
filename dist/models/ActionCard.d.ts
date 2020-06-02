import { MessageTemplateAbs } from './template';
declare class ActionCard extends MessageTemplateAbs {
    title: string;
    text: string;
    hideAvatar: number;
    btnOrientation?: number;
    singleTitle: string;
    singleURL: string;
    btns: {
        title: string;
        actionURL: string;
    }[];
    constructor();
    setBtns(btns: ConcatArray<{
        title: string;
        actionURL: string;
    }>): this;
    setSingleTitle(title: string): this;
    setSingleURL(url: string): this;
    setTitle(title: string): this;
    setText(content: string): this;
    setBtnOrientation(flag: number): this;
    setHideAvatar(flag: number): this;
    get(): any;
}
export { ActionCard };

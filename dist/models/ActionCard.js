"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionCard = void 0;
const template_1 = require("./template");
class ActionCard extends template_1.MessageTemplateAbs {
    constructor() {
        super();
        this.msgtype = 'actionCard';
        this.title = '';
        this.text = '';
        this.hideAvatar = 0;
        this.btnOrientation = 0;
        this.singleTitle = '';
        this.singleURL = '';
        this.btns = [];
    }
    setBtns(btns) {
        this.btns = this.btns.concat(btns);
        return this;
    }
    setSingleTitle(title) {
        this.singleTitle = title;
        return this;
    }
    setSingleURL(url) {
        this.singleURL = url;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setText(content) {
        this.text = content;
        return this;
    }
    setBtnOrientation(flag) {
        this.btnOrientation = flag;
        return this;
    }
    setHideAvatar(flag) {
        this.hideAvatar = flag;
        return this;
    }
    get() {
        return this.render({
            actionCard: {
                title: this.title,
                text: this.text,
                hideAvatar: this.hideAvatar,
                btnOrientation: this.btnOrientation,
                btns: this.btns,
                singleTitle: this.singleTitle,
                singleURL: this.singleURL,
            },
        });
    }
}
exports.ActionCard = ActionCard;
//# sourceMappingURL=ActionCard.js.map
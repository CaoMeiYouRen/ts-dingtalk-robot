"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const template_1 = require("./template");
class Link extends template_1.MessageTemplateAbs {
    constructor(content) {
        super();
        this.msgtype = 'link';
        this.title = '';
        this.messageUrl = '';
        this.picUrl = '';
        this.setContent(content);
    }
    setContent(content) {
        this.text = content;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setImage(image) {
        this.picUrl = image;
        return this;
    }
    setUrl(url) {
        this.messageUrl = url;
        return this;
    }
    get() {
        return this.render({
            link: {
                text: this.text,
                title: this.title,
                picUrl: this.picUrl,
                messageUrl: this.messageUrl,
            },
        });
    }
}
exports.Link = Link;
//# sourceMappingURL=Link.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = void 0;
const template_1 = require("./template");
class Markdown extends template_1.MessageTemplateAbs {
    constructor() {
        super();
        this.msgtype = 'markdown';
        this.canAt = true;
        this.items = [];
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    add(text) {
        if (Array.isArray(text)) {
            this.items.concat(text);
        }
        else {
            this.items.push(text);
        }
        return this;
    }
    get() {
        return this.render({
            markdown: {
                title: this.title,
                text: this.items.join('\n'),
            },
        });
    }
}
exports.Markdown = Markdown;
//# sourceMappingURL=Markdown.js.map
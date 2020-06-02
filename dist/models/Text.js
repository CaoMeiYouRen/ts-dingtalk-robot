"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const template_1 = require("./template");
class Text extends template_1.MessageTemplateAbs {
    constructor(content) {
        super();
        this.msgtype = 'text';
        this.canAt = true;
        this.setContent(content);
    }
    setContent(content) {
        this.content = content;
        return this;
    }
    get() {
        return this.render({
            text: {
                content: this.content,
            },
        });
    }
}
exports.Text = Text;
//# sourceMappingURL=Text.js.map
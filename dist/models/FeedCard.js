"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedCard = void 0;
const template_1 = require("./template");
class FeedCard extends template_1.MessageTemplateAbs {
    constructor(links) {
        super();
        this.msgtype = 'feedCard';
        this.links = links || [];
    }
    addLinks(links) {
        this.links = this.links.concat(links);
        return this;
    }
    get() {
        return this.render({
            feedCard: {
                links: this.links,
            },
        });
    }
}
exports.FeedCard = FeedCard;
//# sourceMappingURL=FeedCard.js.map
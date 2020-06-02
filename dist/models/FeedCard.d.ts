import { MessageTemplateAbs } from './template';
import { Link } from './Link';
declare class FeedCard extends MessageTemplateAbs {
    links: Link[];
    constructor(links: Link[]);
    addLinks(links: Link[]): this;
    get(): any;
}
export { FeedCard };

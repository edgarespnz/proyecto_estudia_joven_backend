import { Content } from "../models/content.model.js";

export class ContentFactory {
    createContent(contentData) {
        const {
            var_name,
            file
        } = contentData;

        const newContent = new Content({
            var_name,
            file
        });

        return newContent;
    }
}

import remark from "remark";
import html from "remark-html";

export default async function markdownToHtml(e) {
    const result = await remark().use(html).process(e);

    return result.toString()
}
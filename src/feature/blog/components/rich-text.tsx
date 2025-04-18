import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { type components } from "@/api/strapi";

type RichTextProps = components["schemas"]["SharedRichTextComponent"]

export default function RichText({ body }: RichTextProps) {
  if (!body) return null;
  return (
    <section className="rich-text py-6 dark:bg-black dark:text-gray-50">
      <Markdown  remarkPlugins={[remarkGfm]} >
        {body}
      </Markdown>
    </section>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getArticleBySlug } from "@/feature/blog/api/articles";
import { formatDate } from "@/lib/utils";
import { getStrapiMedia } from "@/utils/api-helpers";

import { XIcon } from "../components/icons/x";
import Sidebar from "../components/shared-components/sidebar";
import { postRenderer } from "../utils/post-renderer";

async function Blog({ slug }: { slug: string }) {
  const data = await getArticleBySlug(slug);

  const blog = data?.data;

  if (!blog) {
    return notFound();
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4">
      <Sidebar />
      <div className="lg:col-span-3">
        <article className="prose prose-blue dark:prose-invert max-w-none">
          <h1 className="mb-4 text-3xl font-bold">{blog?.title}</h1>

          {/* <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                {blog?.author?.name?.charAt(0)}
              </div>
              <span>{blog.author?.name}</span>
            </div>
            <div>•</div>
            <div>{blog?.createdAt ? formatDate(blog.createdAt) : ""}</div>
          </div> */}
          <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                {blog?.author?.name?.charAt(0)}
              </div>
              <span>{blog.author?.name}</span>

              {/* لینک‌های شبکه‌های اجتماعی نویسنده */}
              <div className="mr-2 flex items-center gap-2">
                {blog?.author?.twitter_profile_url && (
                  <a
                    href={`https://twitter.com/${blog.author.twitter_profile_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition-colors hover:text-primary"
                    aria-label={`حساب توییتر ${blog.author?.name}`}
                  >
                    <XIcon />
                  </a>
                )}
                {blog?.author?.linkedin_profile_url && (
                  <a
                    href={`${blog.author.linkedin_profile_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition-colors hover:text-primary"
                    aria-label={`پروفایل لینکدین ${blog.author?.name}`}
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </div>
            <div>•</div>
            <div>{blog?.createdAt ? formatDate(blog.createdAt) : ""}</div>
          </div>
          {/* TODO: convert Image  */}
          {blog.cover && (
            <Image
              src={getStrapiMedia(blog.cover.url) ?? "/placeholder.svg"}
              alt={blog.title ?? "placeholder"}
              className="mb-6 h-[300px] w-full rounded-lg object-cover"
            />
          )}
          {blog.blocks &&
            blog.blocks?.length !== 0 &&
            blog?.blocks.map((section, index: number) =>
              postRenderer(section, index),
            )}

          {/* <div className="mb-6" dangerouslySetInnerHTML={{ __html: content }} /> */}

          <div className="mb-8 flex flex-wrap gap-2">
            {blog?.categories?.map((category) => (
              <Link key={category.id} href={`/blogs/category/${category.id}`}>
                <Badge variant="secondary" className="cursor-pointer">
                  {category.name}
                </Badge>
              </Link>
            ))}

            {/* {blog.tags.map((tag) => (
              <Link key={tag} href={`/blogs/tag/${tag}`}>
                <Badge variant="outline" className="cursor-pointer">
                  #{tag}
                </Badge>
              </Link>
            ))} */}
          </div>

          {/* <CommentSection blogId={blog.slug} /> */}
        </article>
      </div>
    </div>
  );
}

export default Blog;

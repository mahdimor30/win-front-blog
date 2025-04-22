import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { type DataArticles } from "@/feature/blog/types";
import { formatDate } from "@/lib/utils";
import { getStrapiMedia } from "@/utils/api-helpers";

export default function BlogCard({ blog }: { blog: DataArticles }) {
  console.log(blog?.author,'////////////////////////');
  
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {blog?.cover && (
        <div className="aspect-video overflow-hidden">
          <div className="h-full w-full relative">
            <Image
              src={getStrapiMedia(blog.cover.url) ?? "/placeholder.svg"}
              alt={blog.title ?? "Blog post image"}
              className="h-full w-full object-cover transition-transform hover:scale-105"
              fill
            />
          </div>
        </div>
      )}
      <CardHeader className="flex-grow">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            {blog?.categories?.map((category) => (
              <Link key={category.id} href={`/blogs/category/${category.id}`}>
                <Badge variant="secondary" className="cursor-pointer">
                  {category.name}
                </Badge>
              </Link>
            ))}
            <span className="text-xs text-muted-foreground">
              {formatDate(blog?.updatedAt ?? "")}
            </span>
          </div>
          <Link href={`/blogs/${blog?.slug}`}>
            <h3 className="text-xl font-semibold transition-colors hover:text-primary">
              {blog?.title}
            </h3>
          </Link>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {blog?.description}
          </p>
        </div>
      </CardHeader>
      <CardFooter className="border-t pt-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs">
              {blog?.author?.name?.charAt(0)}
            </div>
            <span className="text-xs">{blog?.author?.name}</span>
          </div>
          <Link
            href={`/blogs/${blog?.slug}`}
            className="text-xs text-primary hover:underline"
          >
            ادامه مطلب
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

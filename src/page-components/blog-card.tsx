import Link from "next/link";

import { type Article } from "@/api/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { getStrapiMedia } from "@/utils/api-helpers";

type DataArticles = Article["data"];

export function BlogCard({ blog }: { blog: DataArticles }) {
  console.log(blog, "///////////////////////////");

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {blog?.cover && (
        <div className="aspect-video overflow-hidden">
          <img
            src={getStrapiMedia(blog.cover.url) || "/placeholder.svg"}
            alt={blog.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
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
            <h3 className="font-semibold text-xl hover:text-primary transition-colors">
              {blog?.title}
            </h3>
          </Link>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {blog?.description}
          </p>
        </div>
      </CardHeader>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary/10 w-6 h-6 flex items-center justify-center text-xs">
              {blog?.createdBy?.firstname?.charAt(0)}
            </div>
            <span className="text-xs">{blog?.createdBy?.lastname}</span>
          </div>
          <Link href={`/blogs/${blog?.slug}`} className="text-xs text-primary hover:underline">
            ادامه مطلب
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

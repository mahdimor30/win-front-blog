import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import type { Blog } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {blog.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="flex-grow">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            {blog.categories.slice(0, 1).map((category) => (
              <Link key={category} href={`/blogs/category/${category}`}>
                <Badge variant="secondary" className="cursor-pointer">
                  {category}
                </Badge>
              </Link>
            ))}
            <span className="text-xs text-muted-foreground">{formatDate(blog.date)}</span>
          </div>
          <Link href={`/blogs/${blog.slug}`}>
            <h3 className="font-semibold text-xl hover:text-primary transition-colors">{blog.title}</h3>
          </Link>
          <p className="text-muted-foreground line-clamp-2 text-sm">{blog.excerpt}</p>
        </div>
      </CardHeader>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary/10 w-6 h-6 flex items-center justify-center text-xs">
              {blog.author.charAt(0)}
            </div>
            <span className="text-xs">{blog.author}</span>
          </div>
          <Link href={`/blogs/${blog.slug}`} className="text-xs text-primary hover:underline">
            ادامه مطلب
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}


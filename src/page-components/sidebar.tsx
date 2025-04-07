import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllCategories } from "@/data/categories";
import { getRecentBlogs } from "@/data/get-articles";
import { formatDate } from "@/lib/utils";

export async function Sidebar() {
  const recentBlogs = await getRecentBlogs();
  const categories = await getAllCategories();
  // console.log(categories?.data);
  
  // const tags = getAllTags()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>آخرین مطالب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentBlogs?.data?.map((blog) => (
              <div key={blog.slug} className="flex flex-col">
                <Link href={`/blogs/${blog.slug}`} className="font-medium hover:text-primary">
                  {blog.title}
                </Link>
                <span className="text-xs text-muted-foreground">{formatDate(blog.createdAt ?? "")}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>دسته‌بندی‌ها</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories?.data?.map((category) => (
              <Link key={category.id} href={`/blogs/category/${category.slug}`}>
                <Badge variant="secondary" className="cursor-pointer">
                 {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>برچسب‌ها</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href={`/blogs/tag/${tag}`}>
                <Badge variant="outline" className="cursor-pointer">
                  #{tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}


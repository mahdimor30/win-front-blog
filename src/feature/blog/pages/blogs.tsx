import { getAllArticle } from "@/feature/blog/api/articles";
import BlogCard from "@/feature/blog/components/blog-card";
import  Sidebar  from "@/feature/blog/components/shared-components/sidebar";

export default async function Blogs() {
  const articles = await getAllArticle();
  const articlesData = articles?.data;

  console.log(articlesData);
  

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 mt-10">
      <Sidebar />
      <div className="lg:col-span-3">
        <h1 className="mb-8 text-3xl font-bold">همه مطالب</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articlesData?.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

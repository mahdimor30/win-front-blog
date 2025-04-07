import { getAllArticle } from "@/data/get-articles";
import { BlogCard } from "@/page-components/blog-card";
import { Sidebar } from "@/page-components/sidebar";

export default async function BlogsPage() {
  const articles = await getAllArticle();
  
  const articlesData = articles?.data;

  console.log(articlesData);
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <Sidebar />
      <div className="lg:col-span-3">
        <h1 className="text-3xl font-bold mb-8">همه مطالب</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articlesData?.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

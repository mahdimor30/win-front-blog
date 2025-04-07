import { BlogCard } from "@/components/blog-card";
import { Sidebar } from "@/components/sidebar";
import { getAllTags,getBlogsByTag } from "@/lib/blog-data";

export async function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag,
  }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const blogs = getBlogsByTag(params.tag);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <Sidebar />
      <div className="lg:col-span-3">
        <h1 className="text-3xl font-bold mb-8">برچسب: #{params.tag}</h1>

        {blogs.length === 0 ? (
          <p>هیچ مطلبی با این برچسب یافت نشد.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


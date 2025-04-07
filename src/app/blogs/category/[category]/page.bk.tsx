import { BlogCard } from "@/components/blog-card";
import { Sidebar } from "@/components/sidebar";
import { getAllCategories,getBlogsByCategory } from "@/lib/blog-data";

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const blogs = getBlogsByCategory(params.category);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <Sidebar />
      <div className="lg:col-span-3">
        <h1 className="text-3xl font-bold mb-8">دسته‌بندی: {params.category}</h1>

        {blogs.length === 0 ? (
          <p>هیچ مطلبی در این دسته‌بندی یافت نشد.</p>
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


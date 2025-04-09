import { getAllArticle } from "@/feature/blog/api/articles";
import Blog from "@/feature/blog/pages/blog";

export async function generateStaticParams() {
  const blogs = await getAllArticle();

  return (blogs?.data ?? [])?.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  return <Blog slug={params.slug} />;
}

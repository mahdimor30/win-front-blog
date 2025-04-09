import { revalidatePath } from "next/cache";

import { env } from "@/env";

export async function POST(request: Request) {
  try {
    const { slug } = (await request.json()) as { slug: string };

    if (!slug) {
      return Response.json(
        {
          message: "Missing slug",
        },
        { status: 400 },
      );
    }

    if (request.headers.get("x-api-key") !== env.REVALIDATE_SECRET) {
      return Response.json("Forbidden", { status: 403 });
    }
    revalidatePath(`/blogs/${slug}`);
    revalidatePath(`/blogs`);
    return Response.json(
      {
        message: "revalidated",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error, "error");
    return Response.json({
      message: "Something went wrong",
      error,
    });
  }
}

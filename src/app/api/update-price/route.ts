import { revalidatePath } from "next/cache";

import { env } from "@/env";

export async function POST(request: Request) {
  if (request.headers.get("x-api-key") !== env.REVALIDATE_SECRET) {
    return Response.json("Forbidden", { status: 403 });
  }
  revalidatePath("/");
  return Response.json(
    {
      message: "revalidated",
    },
    { status: 200 },
  );
}

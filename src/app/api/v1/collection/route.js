import prisma from "@/libs/prisma";

export async function POST(request) {
  const { mal_id, user_email } = await request.json();
  const data = { mal_id, user_email };

  const createCollection = await prisma.collection.create({ data });

  if (!createCollection) {
    return Response.json({
      status: "failed",
      message: "Failed to store data.",
    });
  } else {
    return Response.json({
      status: "success",
      data: data,
    });
  }
}

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { Product } from "@/app/lib/types";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const currentData = JSON.parse(fileContents);
  const productId = Number(params.id);
  const item = currentData.find(
    (dataItem: Product) => dataItem.id === productId
  );

  if (!item) {
    return new NextResponse(JSON.stringify({ error: "Item not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new NextResponse(JSON.stringify({ data: item }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

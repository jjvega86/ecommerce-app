import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { Product } from "../../lib/types";
export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "public", "data.json");

  const fileContents = fs.readFileSync(filePath, "utf8");

  const data = JSON.parse(fileContents);

  return Response.json({ data });
}

export async function POST(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const currentData = JSON.parse(fileContents);
    const highestId = currentData.reduce(
      (maxId: number, item: Product) => Math.max(maxId, item.id),
      0
    );
    const data: Product = await request.json();
    const newProduct = {
      id: highestId + 1,
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,
    };
    currentData.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
    return Response.json({ status: 201, message: "Task added successfully!" });
  } catch (error) {
    console.error("An error occurred:", error);

    // Return an error response
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

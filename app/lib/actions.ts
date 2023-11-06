"use server"

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const addProduct = async (data: FormData) => {
    const name = data.get("name")?.toString();
    const description = data.get("description")?.toString();
    const price = data.get("price")?.toString();
    const imageUrl = data.get("imageUrl")?.toString();

    const newProduct = {
        name,
        description,
        price,
        imageUrl
    }

    await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    revalidateTag("products");
    redirect("/")

}

export const deleteProduct = async (id: string) => {
    await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', 
        },
      }).then((response) => {
        if (response.ok) {
          console.log('Product deleted successfully');
        } else {
          console.error('Failed to delete the product');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      revalidateTag("products");
      redirect("/")
}

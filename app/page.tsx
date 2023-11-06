
import Link from "next/link";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-col">
      <h1 className="p-10 text-center">eCommerce App</h1>
      <Link className="mt-4 mb-8 w-40 self-center" href="/product/create">
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
          Add New Product
        </button>
      </Link>
      <ProductList />
    </main>
  )
}

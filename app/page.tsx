
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center p-24">
      <h1 className="p-10">eCommerce App</h1>
      <ProductList />
    </main>
  )
}

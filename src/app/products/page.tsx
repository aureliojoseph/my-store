import MyProducts from "@/components/MyProducts";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/");

  if (!res.ok) {
    throw new Error("Something went wrong! Reload the Page.");
  }

  return res.json();
}

export default async function Products() {
  const data = await getData();

  return (
    <main>
      <MyProducts data={data} />
    </main>
  );
}

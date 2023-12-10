import { useEffect, useState } from "react";
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products from", category);
    setProducts(["clothing", "household"]);
  }, [category]);
  return <>ProductList</>;
};

export default ProductList;

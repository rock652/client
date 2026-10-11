"use client";

import { useGetProductsQuery } from "../state/api";

const Inventory = () => {
  const { data: products, isError, IsLoading } = useGetProductsQuery();

  console.log(products);
  return <div>page</div>;
};

export default Inventory;

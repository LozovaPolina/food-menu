"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectCategoryItems } from "@/redux/reducer/cartSlice";
import CategoriesMealItem from "@/components/categories/CategoriesMealItem";

function CategoriesMeal() {
  const items = useSelector(selectCategoryItems);
  return (
    <section className={"flex flex-wrap justify-center  gap-4"}>
      {items.map((item) => (
        <CategoriesMealItem key={item.name} item={item} />
      ))}
    </section>
  );
}

export default CategoriesMeal;

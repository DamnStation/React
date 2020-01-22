import React from "react";
import ProductsComponent from "./Products/ProductsComponent";
import ProductsData from "./Products/ProductsData";

function Products() {
  const product = ProductsData.map(item => (
    <ProductsComponent
      key={item.id}
      price={item.price}
      name={item.name}
      description={item.description}
    />
  ));
  return (
    <div className="card-block card text-xs-center card-header display-2">
      {product}
    </div>
  );
}

export default Products;

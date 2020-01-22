import React from "react";
function ProductComponent(props) {
  return (
    <div className="card-block col-xs-12 col-lg-4 row flex-items-xs-middle flex-items-xs-center">
      <h3 className="card-title">Product Name: {props.name}</h3>
      <h3 className="list-group-item">Description: {props.description}</h3>
      <h3 className="list-group-item">
        Price: <span className="currency">{props.price}</span>
      </h3>
    </div>
  );
}
export default ProductComponent;

import React from "react";
import Checkout from "./Checkout";

const CheckoutPage = ({ products }) => {
  return (
    <div>
      <Checkout products={products} />
    </div>
  );
};

export default CheckoutPage;

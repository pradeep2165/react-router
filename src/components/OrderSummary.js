import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order confirm !</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default OrderSummary;

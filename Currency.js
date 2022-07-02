import React from "react";

function Currency({ currency = "USD", children }) {
  let error = "";
  let formattedCurrency = null;

  try {
    formattedCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(children);
    error = "";
  } catch (e) {
    error = "Error: Please provide a valid currency code";
  }

  return (
    <>{error ? <p style={{ color: "red" }}>{error}</p> : formattedCurrency}</>
  );
}
export default Currency;

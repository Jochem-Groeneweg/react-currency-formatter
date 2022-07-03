export default function formatCurrency(currency, amount) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  } catch (e) {
    return "Error: Please provide a valid currency code";
  }
}

export const formatedMoney = (value) =>
  value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

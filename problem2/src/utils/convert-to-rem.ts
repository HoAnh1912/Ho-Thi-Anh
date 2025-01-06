export const convertToRem = (...values: (string | number)[]) => {
  return values
    .map((value) => {
      if (typeof value === "string") {
        return value;
      }

      if (typeof value === "number" && !isNaN(value)) {
        return value / 16 + "rem";
      }

      return value;
    })
    .join(" ");
};

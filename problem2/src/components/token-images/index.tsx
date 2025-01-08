import React from "react";

const TokenImage: React.FC<{ currency: string; size?: number }> = ({
  currency,
  size = 24,
}) => {
  const src = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency.toLowerCase()}.png`;

  return (
    <img
      src={src}
      alt={currency}
      style={{ width: size, height: size }}
      onError={(e) => {
        e.currentTarget.src = "/placeholder-token.png";
      }}
    />
  );
};

export default TokenImage;

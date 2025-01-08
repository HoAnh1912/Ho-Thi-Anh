import axios from "axios";
import { useEffect, useState } from "react";
import { Token } from "types/home";

export const useTokenData = () => {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          "https://interview.switcheo.com/prices.json"
        );
        const tokenList = Object.keys(response.data).map((symbol) => ({
          symbol,
          price: response.data[symbol],
        }));
        setTokens(tokenList);
      } catch (error) {
        console.error("Error fetching token prices:", error);
      }
    };
    fetchTokens();
  }, []);

  return tokens;
};

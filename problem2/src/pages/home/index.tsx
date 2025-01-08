import { yupResolver } from "@hookform/resolvers/yup";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import ModalToken from "components/modal-token";
import TokenSelector from "components/select-token";
import Typography from "elements/typography";
import { useTokenData } from "hooks/use-token-data";
import { useTokenForm } from "hooks/use-token-form";
import { useEffect, useState } from "react";
import { ACTIVE_FIELDS, Token } from "types/home";
import { convertToRem } from "utils/convert-to-rem";
import * as yup from "yup";

const schema = yup.object({
  sell: yup.string().required("Please choose a value sell"),
  buy: yup.string().required("Please choose a value buy"),
});

interface SelectedValue {
  [key: string]: Token | null;
}

const HomePage = () => {
  const tokens = useTokenData();
  const [openToken, setOpenToken] = useState(false);
  const [activeField, setActiveField] = useState<ACTIVE_FIELDS | null>(null);
  const [selectedValue, setSelectedValue] = useState<SelectedValue>({
    [ACTIVE_FIELDS.SELL]: null,
    [ACTIVE_FIELDS.BUY]: null,
  });
  const [sellAmount, setSellAmount] = useState<number>(0);
  const [buyAmount, setBuyAmount] = useState<number>(0);

  const form = useTokenForm({ sell: "", buy: "" }, yupResolver(schema));

  useEffect(() => {
    if (tokens.length > 0) {
      const defaultToken = tokens[0];
      setSelectedValue((prev) => ({
        ...prev,
        [ACTIVE_FIELDS.SELL]: defaultToken,
      }));
      form.setValue("sell", defaultToken.symbol);
    }
  }, [tokens, form]);

  const handleClickOpen = (field: ACTIVE_FIELDS) => {
    setActiveField(field);
    setOpenToken(true);
  };

  const handleClose = (token: Token) => {
    if (activeField) {
      setSelectedValue((prev) => ({
        ...prev,
        [activeField]: token,
      }));
      form.setValue(activeField.toLowerCase(), token.symbol);

      if (
        activeField === ACTIVE_FIELDS.BUY &&
        selectedValue[ACTIVE_FIELDS.SELL] &&
        sellAmount > 0
      ) {
        const sellPrice = selectedValue[ACTIVE_FIELDS.SELL]?.price.price || 0;
        const buyPrice = token.price.price || 0;
        if (sellPrice > 0 && buyPrice > 0) {
          setBuyAmount((sellAmount * sellPrice) / buyPrice);
        }
      }
    }
    setOpenToken(false);
    setActiveField(null);
  };

  const handleSellAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    setSellAmount(value);

    if (selectedValue[ACTIVE_FIELDS.SELL] && selectedValue[ACTIVE_FIELDS.BUY]) {
      const sellPrice = selectedValue[ACTIVE_FIELDS.SELL]?.price.price || 0;
      const buyPrice = selectedValue[ACTIVE_FIELDS.BUY]?.price.price || 0;
      setBuyAmount((value * sellPrice) / buyPrice);
    } else {
      setBuyAmount(0);
    }
  };

  const handleSwap = () => {
    if (
      selectedValue[ACTIVE_FIELDS.SELL] &&
      selectedValue[ACTIVE_FIELDS.BUY] &&
      sellAmount > 0
    ) {
      const sellToken = selectedValue[ACTIVE_FIELDS.SELL];
      const buyToken = selectedValue[ACTIVE_FIELDS.BUY];
      const sellPrice = sellToken.price.price || 0;
      const buyPrice = buyToken.price.price || 0;
      setSelectedValue({
        [ACTIVE_FIELDS.SELL]: buyToken,
        [ACTIVE_FIELDS.BUY]: sellToken,
      });
      setSellAmount(buyAmount);
      setBuyAmount((buyAmount * buyPrice) / sellPrice);
      form.setValue("sell", buyToken.symbol);
      form.setValue("buy", sellToken.symbol);
    }
  };

  return (
    <div className="h-full flex_center">
      <form className="flex flex-col justify-center">
        <div className="rounded-lg shadow-[0_8px_24px_#959da533] p-10">
          <Typography cate="title_2_bold" className="text-center">
            Currency Converter
          </Typography>
          <div className="mt-8">
            <TokenSelector
              field={ACTIVE_FIELDS.SELL}
              selectedValue={selectedValue[ACTIVE_FIELDS.SELL]}
              tokens={tokens}
              openModal={handleClickOpen}
              label="Sell Quantity"
              value={sellAmount}
              onChange={handleSellAmountChange}
            />

            <div
              className="my-5"
              onClick={handleSwap}
              style={{ cursor: "pointer" }}
            >
              <SwapVertOutlinedIcon
                sx={{ fontSize: convertToRem(32), width: "100%" }}
              />
            </div>

            <TokenSelector
              field={ACTIVE_FIELDS.BUY}
              selectedValue={selectedValue[ACTIVE_FIELDS.BUY]}
              tokens={tokens}
              openModal={handleClickOpen}
              label="Buy Value"
              value={buyAmount || 0}
              onChange={() => {}}
            />
          </div>

          <ModalToken
            tokens={tokens}
            selectedValue={activeField ? selectedValue[activeField] : null}
            open={openToken}
            onClose={handleClose}
          />
        </div>
      </form>
    </div>
  );
};

export default HomePage;

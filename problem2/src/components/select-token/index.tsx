import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import { ACTIVE_FIELDS, Token } from "types/home";
import { getTokenImageUrl } from "utils/get-token-url";

interface TokenSelectorProps {
  field: ACTIVE_FIELDS;
  selectedValue: Token | null;
  tokens: Token[];
  openModal: (field: ACTIVE_FIELDS) => void;
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({
  field,
  selectedValue,
  openModal,
  label,
  value,
  onChange,
}) => (
  <div className="flex_center">
    <TextField
      className="mr-5"
      id={`${field}-basic`}
      label={label}
      type="number"
      name={field.toLowerCase()}
      value={value}
      onChange={onChange}
      fullWidth
      disabled={field === ACTIVE_FIELDS.BUY}
    />
    <Button
      variant="outlined"
      className="rounded-lg flex items-center"
      onClick={() => openModal(field)}
    >
      {selectedValue ? (
        <>
          <Avatar
            src={getTokenImageUrl(selectedValue.price.currency)}
            alt={selectedValue.symbol}
            sx={{ width: 24, height: 24, mr: 1 }}
          />
          {selectedValue.price.currency}
        </>
      ) : (
        `Select ${field} Token`
      )}
    </Button>
  </div>
);

export default TokenSelector;

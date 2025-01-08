import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Token } from "types/home";
import { getTokenImageUrl } from "utils/get-token-url";

interface ModalTokenProps {
  open: boolean;
  tokens: Token[];
  selectedValue: Token | null;
  onClose: (token: Token) => void;
}

const ModalToken = ({
  open,
  tokens,
  selectedValue,
  onClose,
}: ModalTokenProps) => {
  const handleListItemClick = (token: Token) => {
    onClose(token);
  };

  return (
    <Dialog onClose={() => onClose(selectedValue!)} open={open}>
      <DialogTitle>Select a token</DialogTitle>
      <List sx={{ pt: 0 }}>
        {tokens.map((token) => (
          <ListItem disablePadding key={token.symbol}>
            <ListItemButton onClick={() => handleListItemClick(token)}>
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: blue[100], color: blue[600] }}
                  src={getTokenImageUrl(token.price.currency)}
                  alt={token.symbol}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${token.price.currency}`}
                secondary={`Price: $${token.price.price}`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default ModalToken;

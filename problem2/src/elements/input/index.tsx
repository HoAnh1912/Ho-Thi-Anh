import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import React, { useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { InputProps } from "./input.type";
import "./style.scss";

const Input: React.FC<InputProps> = ({
  label,
  name,
  control,
  endAdornment,
  startAdornment,
  type,
  disabled,
  endClick,
  className,
  error,
  placeholder = "",
  trigger,
  triggerName,
  onBlur,
  onKeyDown,
  border = false,
  multiline,
  maxLength,
  countCharacter,
  showCount = false,
  limitCharacter,
  preventNumber,
  suggestPopover,
  required,
  newPassword,
}) => {
  const [open, setOpen] = useState(false);
  const CustomWidthTooltip = useMemo(
    () =>
      styled(({ className, ...props }: TooltipProps) => (
        <Tooltip
          {...props}
          classes={{ popper: className }}
          disableFocusListener
          placement="top-start"
          slotProps={{
            popper: {
              sx: {
                [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                  {
                    marginTop: "4px",
                  },
                [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                  {
                    marginBottom: "4px",
                  },
                [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                  {
                    marginLeft: "4px",
                  },
                [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                  {
                    marginRight: "4px",
                  },
              },
            },
          }}
        />
      ))({
        [`& .${tooltipClasses.tooltip}`]: {
          maxWidth: 600,
        },
      }),
    [open]
  );
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function keepHangulCharacters(input: string): string {
    const regex = /[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ ]/g;
    return input.match(regex)?.join("") ?? "";
  }

  return (
    <FormControl
      variant="outlined"
      className={`form-item ${
        multiline === true ? "multiline" : ""
      } w-full [&>*]:font-roboto ${className}`}
    >
      {!!label && (
        <InputLabel
          shrink
          htmlFor={name}
          className="static transform-none flex items-center pr-1"
        >
          {label}
          {required ? <span className="text-red-600">&nbsp;*</span> : ""}
          {!!suggestPopover && (
            <CustomWidthTooltip
              open={open && !!suggestPopover}
              onClose={handleClose}
              onOpen={handleOpen}
              title={
                <Typography className="py-1 px-2 whitespace-nowrap">
                  {suggestPopover}
                </Typography>
              }
            >
              <IconButton
                tabIndex={-1}
                className="ml-1 p-1 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <ContactSupportIcon className="w-[16px] h-[16px]" />
              </IconButton>
            </CustomWidthTooltip>
          )}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <OutlinedInput
              multiline={multiline}
              disabled={disabled}
              id={name}
              value={value}
              onChange={(e) => {
                if (maxLength && e.target.value.length > maxLength) {
                  return;
                }
                if (preventNumber && type !== "number") {
                  e.target.value = keepHangulCharacters(e.target.value);
                }

                onChange(e.target.value);
              }}
              onFocus={() => {
                if (triggerName) trigger(triggerName);
              }}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              endAdornment={
                endAdornment && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={endClick}
                    >
                      {endAdornment}
                    </IconButton>
                  </InputAdornment>
                )
              }
              startAdornment={
                startAdornment && (
                  <InputAdornment position="start">
                    <div className="prefix-input">{startAdornment}</div>
                  </InputAdornment>
                )
              }
              inputProps={{
                autoComplete: newPassword ? "new-password" : "off",
                maxLength: maxLength,
                onCompositionStart: (event) => {
                  if (type === "number") event.preventDefault();
                },
              }}
              className={`overflow-hidden ${
                border === true ? "" : "[&> fieldset]:hidden"
              } `}
              placeholder={placeholder}
              type={type}
              error={!!error}
            />
            <div className="flex items-center justify-between font-bold">
              <div>
                {!!error?.message && (
                  <p className="MuiFormHelperText-root Mui-error">
                    {String(error?.message)}
                  </p>
                )}
              </div>
              {showCount && (
                <p>
                  <span className="text-[#676767] text-xs font-normal">
                    {countCharacter ?? 0}/{limitCharacter}
                  </span>
                </p>
              )}
            </div>
          </>
        )}
      />
    </FormControl>
  );
};

export default Input;

import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { Box, InputLabel, Autocomplete as MAutocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { convertToRem } from "utils/convert-to-rem";
import { TAutocompleteProps } from "./autocomplete.type";

const RADIUS_TEXTFIELD = 10;

export default function Autocomplete<
  T,
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  label,
  required,
  helperText,
  menus,
  textFieldProps,
  formProps,
  autoCompleteProps,
  ...controllerProps
}: Omit<
  TAutocompleteProps<
    T,
    TFieldValues,
    TName,
    Multiple,
    DisableClearable,
    FreeSolo
  >,
  "renderInput"
>) {
  const { name } = controllerProps;

  return (
    <Box>
      <InputLabel htmlFor={name} sx={{ mb: "10px" }}>
        {required && <span style={{ color: "#44BDBD" }}>* </span>}
        {label}
      </InputLabel>
      <Controller
        {...controllerProps}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <MAutocomplete
            {...field}
            fullWidth
            options={menus?.options as []}
            getOptionLabel={(option: any) => option?.label || ""}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...optionProps}
                >
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt={`${option.label} flag`}
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!error}
                helperText={error ? error?.message : helperText}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#fff",
                    backgroundColor: "main.gray70",
                    borderRadius: `${RADIUS_TEXTFIELD}px`,
                    "& > fieldset": {
                      borderRadius: `${RADIUS_TEXTFIELD}px`,
                    },
                  },
                  "& .MuiAutocomplete-root": {
                    padding: "8px",
                  },
                }}
                inputProps={{
                  ...params.inputProps,
                  style: {
                    color: "#fff",
                    fontSize: convertToRem(16),
                    fontWeight: "normal",
                    lineHeight: "normal",
                  },
                }}
                {...textFieldProps}
              />
            )}
            {...autoCompleteProps}
          />
        )}
      />
    </Box>
  );
}

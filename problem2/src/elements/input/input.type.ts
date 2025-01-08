import { FocusEventHandler } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export interface InputProps {
  label?: string;
  name: string;
  control: any;
  endAdornment?: JSX.Element;
  startAdornment?: JSX.Element;
  type?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  endClick?: () => void;
  onBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  disabled?: boolean;
  className?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
  trigger?: any;
  triggerName?: string | string[];
  align?: string;
  border?: boolean;
  areaText?: string;
  countCharacter?: number;
  showCount?: boolean;
  multiline?: boolean;
  maxLength?: number;
  limitCharacter?: number;
  preventNumber?: boolean;
  suggestPopover?: string;
  required?: boolean;
  newPassword?: boolean;
  placeHolder?: boolean;
  version?: string;
}

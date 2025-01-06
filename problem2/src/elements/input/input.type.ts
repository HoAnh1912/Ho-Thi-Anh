import { SxProps, TextFieldProps, Theme } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { KeyboardEvent } from 'react'
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
  UseFormStateReturn
} from 'react-hook-form'
export interface InputItemProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName> {
  label?: React.ReactNode
  subLabel?: React.ReactNode
  required?: boolean
  showErrorMessage?: boolean
  textFieldProps?: TextFieldProps
  sxBox?: SxProps<Theme>
  sxInput?: SxProps<Theme>
  sxLabel?: SxProps<Theme>
  sxSubLabel?: SxProps<Theme>
  maxLength?: number
  error?: boolean
  onChangeInput?: (value: ChangeEvent<HTMLInputElement>) => void
  onBlur?: VoidFunction
  renderInput?: ({
    field,
    fieldState,
    formState
  }: {
    field: ControllerRenderProps<TFieldValues, TName>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<TFieldValues>
  }) => React.ReactElement
  onClickDelete?: (value: PathValue<TFieldValues, TName>) => void
  onClickBtnSearch?: (value: PathValue<TFieldValues, TName>) => void
  regex?: RegExp
  typeRegex?: 'KOREAN' | undefined
  autoFill?: boolean
}

export const RADIUS_TEXTFIELD = 10

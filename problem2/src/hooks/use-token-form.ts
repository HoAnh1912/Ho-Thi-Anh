import { useForm } from "react-hook-form";

export const useTokenForm = (defaultValues: any, resolver: any) => {
  return useForm({
    defaultValues,
    mode: "onChange",
    resolver,
  });
};

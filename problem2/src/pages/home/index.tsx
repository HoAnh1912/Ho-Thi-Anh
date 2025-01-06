import { yupResolver } from "@hookform/resolvers/yup";
import SelectToken from "elements/autocomplete";
import InputAmount from "elements/input";
import Typography from "elements/typography";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { COUNTRIES } from "types/countries";
import Autocomplete from "elements/autocomplete";

const HomePage = () => {
  const schema = yup.object({});

  const form = useForm<any>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-3xl md:p-8">
        <Typography cate="large_title">Currency Converter</Typography>
        <div className="flex_center">
          <InputAmount />
          <div className="flex_center gap-5">
            <Autocomplete
              label="From"
              required={true}
              menus={{ options: COUNTRIES, label: "label", value: "code" }}
              name="from"
              formProps={form}
            />
            <CompareArrowsOutlinedIcon />
            <Autocomplete
              label="To"
              required={true}
              menus={{ options: COUNTRIES, label: "label", value: "code" }}
              name="to"
              formProps={form}
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default HomePage;

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";

type Props = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <FormField
      name={rest.name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="capitalize">{label ?? field.name}</FormLabel>
          <FormControl>
            <Input
              placeholder={rest.placeholder ?? rest.name}
              {...rest}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

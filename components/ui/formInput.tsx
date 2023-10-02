import {
  Control,
  ControllerProps,
  FieldPath,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";

// type Props<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// > = {
//   name: string;
//   label?: string;
// } & InputHTMLAttributes<HTMLInputElement> &
//   ControllerProps<TFieldValues, TName>;

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  label,
  ...rest
}: {
  label?: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues, TName>;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <FormField
      control={control}
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

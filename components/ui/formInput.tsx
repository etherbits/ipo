import { Control, FieldPath, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  label,
  withLabel = true,
  withMessage = true,
  containerCN,
  ...rest
}: {
  label?: string;
  name: Path<TFieldValues>;
  withLabel?: boolean;
  withMessage?: boolean;
  control: Control<TFieldValues, TName>;
  containerCN?: ClassNameValue;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <FormField
      control={control}
      name={rest.name}
      render={({ field }) => (
        <FormItem className={cn("w-full", containerCN)}>
          {label && (
            <FormLabel className="capitalize">{label ?? field.name}</FormLabel>
          )}
          <FormControl>
            <Input
              placeholder={rest.placeholder ?? rest.name}
              {...rest}
              {...field}
            />
          </FormControl>
          {withMessage && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default FormInput;

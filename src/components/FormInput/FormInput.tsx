import { forwardRef } from "react";
import { Input } from "./style";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <Input {...props} ref={ref} />;
  }
);

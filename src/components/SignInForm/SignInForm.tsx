import { useForm } from "react-hook-form";
import { emailRegex } from "../../regex";
import { Button } from "../Button";
import { FormErrorNotification } from "../FormErrorNotification";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import { FormWrapper } from "../FormWrapper";

interface FormValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = ({ email, password }: FormValues) => {
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: emailRegex,
            message: "Looks like you have entered invalid email",
          },
        })}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      {errors.email && errors.email.message && (
        <FormErrorNotification message={errors.email.message} />
      )}

      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        {...register("password", {
          required: "Please enter your password",
          minLength: {
            value: 5,
            message: "Password must be at least 5 characters long",
          },
        })}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      {errors.password && errors.password.message && (
        <FormErrorNotification message={errors.password.message} />
      )}

      <Button type="submit">Sumbit</Button>
    </FormWrapper>
  );
};
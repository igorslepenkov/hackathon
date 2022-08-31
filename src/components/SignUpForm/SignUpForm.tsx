import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { emailRegex } from "../../regex";
import { Color } from "../../ui";
import { Button } from "../Button";
import { CheckboxGroup } from "../CheckboxGroup";
import { FormErrorNotification } from "../FormErrorNotification";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import { FormWrapper } from "../FormWrapper";
import { Title } from "../Title";

interface FormValues {
  email: string;
  password: string;
  confirm: string;
  role: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
  } = useForm<FormValues>();
  const onSubmit = ({ email, password, confirm, role }: FormValues) => {
    if (password !== confirm) {
      setError("confirm", {
        type: "required",
        message: "Passwords do not match",
      });
      return;
    }
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title grade={1} color={Color.BluePrimary}>
        Form
      </Title>
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
          min: {
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

      <FormLabel htmlFor="confirm">Confirm your password</FormLabel>
      <FormInput
        {...register("confirm", {
          required: "Please enter your password",
          min: {
            value: 5,
            message: "Password must be at least 5 characters long",
          },
        })}
        id="confirm"
        type="password"
        placeholder="Confirm your password"
      />
      {errors.confirm && errors.confirm.message && (
        <FormErrorNotification message={errors.confirm.message} />
      )}

      <FormLabel>Choose your role:</FormLabel>
      <Controller
        control={control}
        rules={{ required: "Please choose you role" }}
        name="role"
        render={({ field: { value, ref, onChange, onBlur } }) => {
          return (
            <CheckboxGroup
              value={value}
              name="role"
              checkboxes={["patient", "doctor"]}
              onChange={onChange}
              onBlur={onBlur}
            />
          );
        }}
      />
      {errors.role && errors.role.message && (
        <FormErrorNotification message={errors.role.message} />
      )}

      <Button type="submit">Sumbit</Button>
    </FormWrapper>
  );
};
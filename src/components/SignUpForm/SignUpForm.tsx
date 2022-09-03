import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { emailRegex, nameRegex } from "../../regex";
import { Button } from "../Button";
import { CheckboxGroup } from "../CheckboxGroup";
import { FormErrorNotification } from "../FormErrorNotification";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import { FormWrapper } from "../FormWrapper";
import { isValidPhoneNumber } from "libphonenumber-js";
import { IUser } from "../../types";
import { useAppDispatch } from "../../store/hooks";
import { signUp } from "../../store/features/userSlice";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirm: string;
  role: "patient" | "doctor";
  phone: string;
  specialty: string;
  document: string;
  birthDate: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    watch,
  } = useForm<IFormValues>();
  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState<"first" | "doctor" | "patient">(
    "first"
  );

  const checkboxValue = watch("role");
  useEffect(() => {
    if (checkboxValue) {
      setActivePage(checkboxValue);
    }
  }, [checkboxValue]);

  const onSubmit = ({
    name,
    email,
    password,
    confirm,
    role,
    phone,
    specialty,
    document,
    birthDate,
  }: IFormValues) => {
    if (password !== confirm) {
      setError("confirm", {
        type: "required",
        message: "Passwords do not match",
      });
      return;
    }

    const userCred: IUser = {
      name,
      email,
      password,
      role,
      phone,
    };

    if (specialty) {
      userCred.specialty = specialty;
    }
    if (document) {
      userCred.document = document;
    }
    if (birthDate) {
      userCred.birthDate = birthDate;
    }

    dispatch(signUp(userCred));
    // reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        {...register("name", {
          required: "Please enter your first and last name",
          pattern: {
            value: nameRegex,
            message:
              "Please enter your name like 'John Johnson' (<FirstName LastName>)",
          },
        })}
        id="name"
        type="text"
        placeholder="John Johnson"
      />
      {errors.name && errors.name.message && (
        <FormErrorNotification message={errors.name.message} />
      )}

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

      <FormLabel htmlFor="phone">Phone</FormLabel>
      <FormInput
        {...register("phone", {
          required: "Please enter your phone number",
          validate: (value) => isValidPhoneNumber(value),
        })}
        id="phone"
        type="phone"
        placeholder="Enter your phone"
      />
      {errors.phone && (
        <FormErrorNotification message={"Invalid phone number"} />
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
          minLength: {
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

      {activePage === "doctor" && (
        <>
          <FormLabel htmlFor="specialty">Specilaty</FormLabel>
          <FormInput
            {...register("specialty", {
              required: "Please enter your specialty",
              minLength: {
                value: 4,
                message: "Please enter at list 4 symbols",
              },
            })}
            id="specialty"
            type="text"
            placeholder="Enter your specialty"
          />
          {errors.specialty && errors.specialty.message && (
            <FormErrorNotification message={errors.specialty.message} />
          )}

          <FormLabel htmlFor="document">Document</FormLabel>
          <FormInput
            {...register("document", {
              required:
                "Please enter series and number of your higher medical education diploma",
            })}
            id="document"
            type="text"
            placeholder="Enter your diploma series and number"
          />
          {errors.document && errors.document.message && (
            <FormErrorNotification message={errors.document.message} />
          )}
        </>
      )}

      {activePage === "patient" && (
        <>
          <FormLabel>Birth Date</FormLabel>
          <FormInput
            {...register("birthDate", {
              required: "Please enter your birth date",
            })}
            id="birthDate"
            type="date"
          />
        </>
      )}

      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

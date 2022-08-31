import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { emailRegex } from "../../regex";
import { Button } from "../Button";
import { CheckboxGroup } from "../CheckboxGroup";
import { FormErrorNotification } from "../FormErrorNotification";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import { FormWrapper } from "../FormWrapper";
import { isValidPhoneNumber } from "libphonenumber-js";

interface IFormValues {
  email: string;
  password: string;
  confirm: string;
  role: "patient" | "doctor";
  phone: string;
  specialty: string;
  document: string;
  birthDate: string;
}

interface IDoctor {
  email: string;
  password: string;
  role: "doctor";
  phone: string;
  specialty?: string;
  document?: string;
}

interface IPatient {
  email: string;
  password: string;
  role: "patient";
  phone: string;
  birthDate?: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
    watch,
  } = useForm<IFormValues>();
  console.log(errors);
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

    let userCred = {};

    switch (role) {
      case "patient":
        const patientCred: IPatient = {
          email,
          password,
          role,
          phone,
          birthDate,
        };
        userCred = patientCred;
        break;

      case "doctor":
        const doctorCred: IDoctor = {
          email,
          password,
          role,
          phone,
          specialty,
          document,
        };
        userCred = doctorCred;
        break;
    }

    console.log(userCred);
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
            id="specialty"
            type="date"
          />
        </>
      )}

      <Button type="submit">Sumbit</Button>
    </FormWrapper>
  );
};

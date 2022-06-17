import { Button, Container, FormControl, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { InputComponent } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

export interface ValuesFormProps {
  name: string;
  email: string;
  password: string;
}

const schemaSignUp = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("This email is incorrect format :/")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/g, {
      message:
        "Your password must be at least 8 characters long, including at least 1 number, 1 capital letter, and a special character.",
    }),
});

export function SignUpWithEmail() {
  const routes = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ValuesFormProps>({
    defaultValues: { name: "", email: "", password: "" },
    resolver: yupResolver(schemaSignUp),
  });

  const handleForm = (data: ValuesFormProps) => {
    localStorage.setItem("user", data.email);

    routes.push("/shopping");
  };
  return (
    <Container
      bg="#fff"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      borderRadius={12}
      p={4}
    >
      <Text fontSize="2xl" color="#633bbc" fontWeight="bold">
        Sign Up
      </Text>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          marginTop: 20,
        }}
        onSubmit={handleSubmit(handleForm)}
      >
        <FormControl
          display="flex"
          flexDirection="column"
          gap={8}
          alignItems="center"
        >
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <InputComponent
                field={field}
                fieldStateError={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <InputComponent
                field={field}
                fieldStateError={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <InputComponent
                field={field}
                fieldStateError={fieldState.error?.message}
              />
            )}
          />

          <Button
            bg="#633bbc"
            w={120}
            _hover={{ bg: "#452095" }}
            color="white"
            type="submit"
          >
            Sign Up
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

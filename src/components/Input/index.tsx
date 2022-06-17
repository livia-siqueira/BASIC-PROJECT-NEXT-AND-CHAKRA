import { Container, Input, Text } from "@chakra-ui/react";
import { ControllerRenderProps } from "react-hook-form";
import { ValuesFormProps } from "../SignUpWithEmail";

interface InputProps {
  field: ControllerRenderProps<ValuesFormProps, any>;
  fieldStateError?: string;
}
export function InputComponent({ field, fieldStateError }: InputProps) {
  return (
    <Container>
      <Input
        {...field}
        variant="flushed"
        color="black"
        focusBorderColor="#633bbc"
        pl={3}
        placeholder={field.name.toUpperCase()}
        type={field.name.toUpperCase() === "PASSWORD" ? "password" : "text"}
      />
      <Text
        color="yellow.500"
        fontWeight="bold"
        fontSize={12}
        textAlign="center"
      >
        {fieldStateError}
      </Text>
    </Container>
  );
}

import {
  Button,
  Container,
  FormControl,
  Input,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { SignUpWithEmail } from "../components/SignUpWithEmail";

const Home: NextPage = () => {
  return (
    <Container
      bg="rgb(63 63 70)"
      display="flex"
      justifyContent="center"
      centerContent
      maxW="100vw"
      h="100vh"
    >
      <SignUpWithEmail />
    </Container>
  );
};

export default Home;

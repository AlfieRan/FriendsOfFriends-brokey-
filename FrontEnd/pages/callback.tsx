import type { NextPage } from "next";
import {
  Box,
  Center,
  Container,
  Link,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import FootNote from "../Components/FootNote";
import TopBar from "../Components/TopBar";

const CallBack: NextPage = () => {
  return (
    <Box>
      <TopBar />
      <Center h={"80vh"}>
        <Container>
          <Center fontSize={45}>Thank you for signing in!</Center>
          <Center fontSize={25}> Please wait while we do some checks...</Center>
        </Container>
      </Center>
      <FootNote />
    </Box>
  );
};

export default CallBack;

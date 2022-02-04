import type { NextPage } from "next";
import { Box, Center, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FootNote from "../Components/FootNote";
import TopBar from "../Components/TopBar";

const CallBack: NextPage = () => {
  const [AuthCode, setAuthCode] = useState<string>("");
  const [Error, setError] = useState<boolean>(false);

  function SaveCode(code: string) {
    const codeRequest = new Request(`http://localhost:8000/storeTokens`, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }),
    });
    fetch(codeRequest)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  const router = useRouter();
  useEffect(() => {
    if (router && router.query.code) {
      setAuthCode(router.query.code as string);
      SaveCode(AuthCode);
    } else {
      setError(false);
    }
  }, [router]);

  return (
    <Box>
      <TopBar />
      <Center h={"80vh"}>
        <Container hidden={Error}>
          <Center fontSize={45}>Thank you for signing in!</Center>
          <Center fontSize={25}> Please wait while we do some checks...</Center>
        </Container>
        <Container hidden={!Error}>
          <Center fontSize={45}>Something has gone wrong</Center>
          <Center fontSize={25}>Please try again.</Center>
        </Container>
      </Center>
      <FootNote />
    </Box>
  );
};

export default CallBack;

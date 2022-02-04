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

const Home: NextPage = () => {
  const CLIENT_ID = "RDdHUUhWbFJnc3pWR3Uxcmc1Qm86MTpjaQ";
  const CallBackUrl = "http://localhost:3000/callback";
  return (
    <Box>
      <TopBar />
      <Center h={"80vh"}>
        <Link
          href={`https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${CallBackUrl}&scope=follows.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`}
          fontSize={"250%"}
          borderRadius={"7839547893578935"}
          // borderColor={"#FFF"}
          // borderWidth={[2]}
          color={"#fff"}
          background={"#2c89ff"}
          shadow="lg"
          _hover={{ bg: "#0c5dbe" }}
          _active={{
            bg: "#3784ff",
            transform: "scale(0.97)",
          }}
          px={"3%"}
          py={"1%"}
        >
          <Center>
            <Image
              src={"twittericon.png"}
              alt={"Twitter Icon"}
              width={10}
              mr={"4"}
            ></Image>
            <Text algin={"right"}> Sign in With Twitter</Text>
          </Center>
        </Link>
      </Center>
      <FootNote />
    </Box>
  );
};

export default Home;

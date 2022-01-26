import type { NextPage } from "next";
import { Text, Center, Image } from "@chakra-ui/react";

const TopBar: NextPage = () => {
  return (
    <Center
      w={"100vw"}
      h={"10vh"}
      position={"static"}
      top={"0"}
      fontSize={"250%"}
    >
      <Text>Friends of Friends</Text>
    </Center>
  );
};

export default TopBar;

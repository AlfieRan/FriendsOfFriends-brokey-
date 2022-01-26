import type { NextPage } from "next";
import { Text, Center, Link } from "@chakra-ui/react";

const FootNote: NextPage = () => {
  return (
    <Center
      w={"100vw"}
      h={"10vh"}
      position={"static"}
      bottom={"0"}
      fontSize={"150%"}
      verticalAlign={"center"}
    >
      <Link href={"https://www.alfieranstead.com"}>
        Created by Alfie Ranstead
      </Link>
    </Center>
  );
};

export default FootNote;

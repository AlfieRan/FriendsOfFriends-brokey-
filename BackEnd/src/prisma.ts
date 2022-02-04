import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { UserSignUp } from "../../sharedTypes";

// export async function UserInfo(reqid: string) {
//   const UserInfo = await prisma.user.findUnique({
//     where: {
//       id: reqid,
//     },
//     select: {
//       name: true,
//     },
//   });
//   return UserInfo;
// }

export async function SignUp(UserInfo: UserSignUp) {
  if (UserInfo.ClientSignUp) {
    await prisma.user.create({
      data: {
        id: UserInfo.id,
        refreshToken: UserInfo.RefreshToken,
        authToken: UserInfo.AuthToken,
      },
    });
  } else {
    await prisma.user.create({
      data: {
        id: UserInfo.id,
        refreshToken: null,
        authToken: null,
      },
    });
  }
}

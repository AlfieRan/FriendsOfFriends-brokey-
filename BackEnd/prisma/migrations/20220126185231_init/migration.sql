-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "AuthToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "lastRefreshed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "friendids" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

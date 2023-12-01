-- CreateTable
CREATE TABLE "Flowers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT,
    "receiver" TEXT,
    "sender" TEXT,
    "flowers" INTEGER NOT NULL,
    "colour" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

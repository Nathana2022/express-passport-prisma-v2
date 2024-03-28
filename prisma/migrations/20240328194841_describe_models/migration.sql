-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ordinateur" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Ordinateur_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ordinateur_model_key" ON "Ordinateur"("model");

-- AddForeignKey
ALTER TABLE "Ordinateur" ADD CONSTRAINT "Ordinateur_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

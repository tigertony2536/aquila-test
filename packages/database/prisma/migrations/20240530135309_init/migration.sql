-- CreateTable
CREATE TABLE "TFgame" (
    "id" SERIAL NOT NULL,
    "numbers" TEXT NOT NULL,
    "solutios" TEXT[],

    CONSTRAINT "TFgame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TFgame_numbers_key" ON "TFgame"("numbers");

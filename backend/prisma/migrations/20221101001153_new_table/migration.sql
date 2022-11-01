-- CreateTable
CREATE TABLE "makers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "makers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maker_id" INTEGER NOT NULL,

    CONSTRAINT "variations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "variations" ADD CONSTRAINT "variations_maker_id_fkey" FOREIGN KEY ("maker_id") REFERENCES "makers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

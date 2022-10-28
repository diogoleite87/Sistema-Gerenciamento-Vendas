-- CreateTable
CREATE TABLE "clients" (
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("cell")
);

-- CreateTable
CREATE TABLE "products" (
    "name" TEXT NOT NULL,
    "descrption" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sold" (
    "id" SERIAL NOT NULL,
    "productID" INTEGER NOT NULL,
    "clientCell" TEXT NOT NULL,
    "valueSold" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sold_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sold" ADD CONSTRAINT "sold_productID_fkey" FOREIGN KEY ("productID") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sold" ADD CONSTRAINT "sold_clientCell_fkey" FOREIGN KEY ("clientCell") REFERENCES "clients"("cell") ON DELETE RESTRICT ON UPDATE CASCADE;

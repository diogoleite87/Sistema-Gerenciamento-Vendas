-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
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
    "description" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sold" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "client_cell" TEXT NOT NULL,
    "value_sold" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "makers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "makers_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "variations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maker_name" TEXT NOT NULL,

    CONSTRAINT "variations_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("name")
);

-- AddForeignKey
ALTER TABLE "sold" ADD CONSTRAINT "sold_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sold" ADD CONSTRAINT "sold_client_cell_fkey" FOREIGN KEY ("client_cell") REFERENCES "clients"("cell") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variations" ADD CONSTRAINT "variations_maker_name_fkey" FOREIGN KEY ("maker_name") REFERENCES "makers"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

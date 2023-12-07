-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "interestId" INTEGER,
    "businessId" INTEGER,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intereses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "intereses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "area-de-negocio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "area-de-negocio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_email_key" ON "cliente"("email");

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "intereses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "area-de-negocio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

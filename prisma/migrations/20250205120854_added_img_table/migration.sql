-- CreateTable
CREATE TABLE "Img" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productColorId" INTEGER NOT NULL,

    CONSTRAINT "Img_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Img" ADD CONSTRAINT "Img_productColorId_fkey" FOREIGN KEY ("productColorId") REFERENCES "ProductColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

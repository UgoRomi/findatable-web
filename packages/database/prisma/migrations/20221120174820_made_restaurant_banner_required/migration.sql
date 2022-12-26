/*
  Warnings:

  - Made the column `banner` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "banner" SET NOT NULL;

-- CreateTable
CREATE TABLE "Distinction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,

    CONSTRAINT "Distinction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantDistinction" (
    "id" SERIAL NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "distinctionId" INTEGER NOT NULL,

    CONSTRAINT "RestaurantDistinction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Distinction_name_key" ON "Distinction"("name");

-- AddForeignKey
ALTER TABLE "RestaurantDistinction" ADD CONSTRAINT "RestaurantDistinction_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantDistinction" ADD CONSTRAINT "RestaurantDistinction_distinctionId_fkey" FOREIGN KEY ("distinctionId") REFERENCES "Distinction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

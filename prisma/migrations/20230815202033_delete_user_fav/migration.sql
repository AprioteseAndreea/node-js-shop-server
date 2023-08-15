/*
  Warnings:

  - You are about to drop the `UserFavourite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserFavourite" DROP CONSTRAINT "UserFavourite_authorId_fkey";

-- DropForeignKey
ALTER TABLE "UserFavourite" DROP CONSTRAINT "UserFavourite_productId_fkey";

-- DropTable
DROP TABLE "UserFavourite";

-- CreateTable
CREATE TABLE "_UserProductFav" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserProductFav_AB_unique" ON "_UserProductFav"("A", "B");

-- CreateIndex
CREATE INDEX "_UserProductFav_B_index" ON "_UserProductFav"("B");

-- AddForeignKey
ALTER TABLE "_UserProductFav" ADD CONSTRAINT "_UserProductFav_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserProductFav" ADD CONSTRAINT "_UserProductFav_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

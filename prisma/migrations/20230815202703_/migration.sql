/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserProductFav` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserProductFav" DROP CONSTRAINT "_UserProductFav_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserProductFav" DROP CONSTRAINT "_UserProductFav_B_fkey";

-- DropTable
DROP TABLE "Job";

-- DropTable
DROP TABLE "_UserProductFav";

-- CreateTable
CREATE TABLE "_FavouriteUserProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavouriteUserProducts_AB_unique" ON "_FavouriteUserProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_FavouriteUserProducts_B_index" ON "_FavouriteUserProducts"("B");

-- AddForeignKey
ALTER TABLE "_FavouriteUserProducts" ADD CONSTRAINT "_FavouriteUserProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavouriteUserProducts" ADD CONSTRAINT "_FavouriteUserProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

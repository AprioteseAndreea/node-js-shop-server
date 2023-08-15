-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "stars" INTEGER NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "reviews" INTEGER NOT NULL,
    "isGenius" BOOLEAN NOT NULL,
    "isTopFavourite" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

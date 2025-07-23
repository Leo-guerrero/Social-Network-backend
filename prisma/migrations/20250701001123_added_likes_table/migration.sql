-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "postid" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "likes_userid_postid_key" ON "likes"("userid", "postid");

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_postid_fkey" FOREIGN KEY ("postid") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

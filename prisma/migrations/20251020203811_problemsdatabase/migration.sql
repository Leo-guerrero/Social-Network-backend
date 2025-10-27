-- CreateTable
CREATE TABLE "problems" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "desc" TEXT NOT NULL DEFAULT '',
    "startCode" TEXT NOT NULL DEFAULT '',
    "testCaseCode" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "problems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER NOT NULL,
    "daAnswer" TEXT NOT NULL DEFAULT '',
    "answerOrder" INTEGER NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "problems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

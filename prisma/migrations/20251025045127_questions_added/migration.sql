-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER NOT NULL,
    "questionOrder" INTEGER NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "problems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

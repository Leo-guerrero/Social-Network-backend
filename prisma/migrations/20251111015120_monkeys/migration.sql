-- CreateTable
CREATE TABLE "SolvedProblems" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "problemid" INTEGER NOT NULL,
    "currentUserCode" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "SolvedProblems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SolvedProblems" ADD CONSTRAINT "SolvedProblems_problemid_fkey" FOREIGN KEY ("problemid") REFERENCES "problems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolvedProblems" ADD CONSTRAINT "SolvedProblems_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

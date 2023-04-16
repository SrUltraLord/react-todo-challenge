-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "remind" TEXT,
    "repeat" TEXT,
    "complete" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Todo" ("deadline", "endTime", "id", "remind", "repeat", "startTime", "title") SELECT "deadline", "endTime", "id", "remind", "repeat", "startTime", "title" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

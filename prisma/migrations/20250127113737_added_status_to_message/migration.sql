-- CreateEnum
CREATE TYPE "Status" AS ENUM ('UNREAD', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'UNREAD';

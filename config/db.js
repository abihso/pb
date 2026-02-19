import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:../prisma/presby.db"
    }
  }
});
export default prisma
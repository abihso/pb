import { PrismaClient } from '@prisma/client';

 const prisma = new PrismaClient({
  log : ["error","warn","query"]
});

 const connectDb = async () => {
  try {
    await prisma.$connect()
    console.log("Connected")
  } catch (error) {
    console.error(`Error : ${error.message}`)
    process.exit(1)
  }
}

 const disconnectDb = async () => {
  await prisma.$disconnect()
}


export {
  connectDb,disconnectDb,prisma
}



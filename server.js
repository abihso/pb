import express from "express"
import adminRoute from "./routes/admin-route.js"
import cors from "cors"
import env from "dotenv"
import authroute from "./routes/auth-route.js";
import { PrismaClient } from '@prisma/client';
import helmet from "helmet";
import rateLimit from "express-rate-limit";



const app = express()
const prisma = new PrismaClient();
env.config()
app.use( 
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 
// app.use(helmet());
// app.use(rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 200
// }));

app.use("/api/admin", adminRoute) 
app.use("/api/auth", authroute) 

app.listen(5001, () => console.log("server is running"))

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router" // default로 export하지 않았기 때문에 이렇게  import하는 것

const app = express();

const handleHome = (req, res) =>  res.send("Hello from home ");     // req: request object / res: response object

const handleProfile = (req, res) =>  res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter)
 
export default app; // 누군가 내 파일을 import 하면, app object를 주겠다는 의미

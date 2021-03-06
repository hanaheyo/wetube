import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(helmet());
app.use(morgan("dev"));

// Seperate Url
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.videos, videoRouter);
 
export default app; // 누군가 내 파일을 import 하면, app object를 주겠다는 의미

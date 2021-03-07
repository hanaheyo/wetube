import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`); 

const handleHome = (req, res) => 
    // req: request object / res: response object
    res.send("Hello from home ");

const handleProfile = (req, res) =>  res.send("You are on my profile");

app.use(morgan("dev"));

app.use(helmet());

const mid = (req, res, next) => {
    res.send("not happening");
}

app.get("/", mid, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
 
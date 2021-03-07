import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`); 

const handleHome = (req, res) => 
    // req: request object / res: response object
    res.send("Hello from home ");

const handleProfile = (req, res) =>  res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next(); // middleware 함수인 betweenHome 호출
}

// 위에서 아래 순서로 실행되기 때문에, 여기에다가 놓으면 주소가 어디든 항상 실행됨!
app.use(betweenHome)

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
 
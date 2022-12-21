import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
const server = express();
import cluster from 'node:cluster';
import { cpus } from 'node:os';
import router from "./routes/router";
const PORT = process.env.PORT;


server.use(cookieParser());
server.use(cors(
  {
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  }
));
server.use(express.json());
server.use('/api', router);



async function start() {
  try {
    console.log('Start server');
  } catch (error) {
    console.log('Server Error', error);
    process.exit(1)
  }
}
start();




if (cluster.isPrimary) {
  const cpusCount = cpus().length;
  for (let i = 0; i < cpusCount / 2; i++) {
    cluster.fork();
  };
  cluster.on('exit', (worker, code, signal) => {
    cluster.fork();
  })
} else {
  server.listen(PORT);
}



/*
let users = {
  name: "Ritik",
  Age: "18"
}

server.get('/setuser', (req, res) => {
  res.cookie("userData", users);
  res.send('user data added to cookie');
});

server.get('/getuser', (req, res) => {
  //shows all the cookies
  res.send(req.cookies);
});
*/

//////////////////read a file//////////////////////////////
/*
import fs from "fs";
fs.readFile('./text/bagdan.txt', 'utf8', function (err, data) {
  server.get("/text", (req, res) => {
    res.json(`${data}`);
  });
});*/




/*

type typeDBusers = {
  id: number,
  nickName: string,
  email: string,
  password: string
};

const dataBase: {users: typeDBusers[]} = {
  users: [
    {id:1, nickName: "David", email: "givaslook@gmail.com", password: "1244rdhrt65"},
    {id:2, nickName: "Michael", email: "minsksity@mail.ru", password: "Afdrhtr456"},
    {id:3, nickName: "Pedra", email: "vasilisy@mail.tut", password: "SDF_56556r"},
    {id:4, nickName: "Linkoln", email: "const123f@mail.ru", password: "eww456567"},
    {id:5, nickName: "Imbra", email: "fgghesf234ftt@bing.com", password: "bfdgnmgm4354"}
  ]
};*/


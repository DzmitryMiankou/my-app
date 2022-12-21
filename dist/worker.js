"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const server = (0, express_1.default)();
const node_cluster_1 = __importDefault(require("node:cluster"));
const node_os_1 = require("node:os");
const router_1 = __importDefault(require("./routes/router"));
const PORT = process.env.PORT;
server.use((0, cookie_parser_1.default)());
server.use((0, cors_1.default)({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
}));
server.use(express_1.default.json());
server.use('/api', router_1.default);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Start server');
        }
        catch (error) {
            console.log('Server Error', error);
            process.exit(1);
        }
    });
}
start();
if (node_cluster_1.default.isPrimary) {
    const cpusCount = (0, node_os_1.cpus)().length;
    for (let i = 0; i < cpusCount / 2; i++) {
        node_cluster_1.default.fork();
    }
    ;
    node_cluster_1.default.on('exit', (worker, code, signal) => {
        node_cluster_1.default.fork();
    });
}
else {
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

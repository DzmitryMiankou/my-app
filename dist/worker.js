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
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const node_cluster_1 = __importDefault(require("node:cluster"));
const node_os_1 = require("node:os");
const router_1 = __importDefault(require("./routes/router"));
const ws_1 = __importDefault(require("ws"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = process.env.PORT;
const wss = new ws_1.default.Server({ server: server });
wss.on('connection', function connection(ws) {
    ws.on('open', function open() {
        ws.send('something');
    });
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
                // console.log('data', data);
            }
        });
    });
});
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
}));
app.use(express_1.default.json());
app.use('/api', router_1.default);
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

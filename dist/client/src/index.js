"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importDefault(require("./components/redux/store"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.scss");
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(store_1.default, { store: store_1.default } >
    />
    < /Provider>
    < /HashRouter>);

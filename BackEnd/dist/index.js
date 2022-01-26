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
const TwitterApi_1 = require("./TwitterApi");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const api = (0, express_1.default)();
const port = process.env.PORT;
api.use((0, cors_1.default)());
api.use(express_1.default.json()); // for parsing application/json
api.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const TwitCon = new TwitterApi_1.TwitConnection();
    yield TwitCon.getUserOauthLink("https://monochat.app")
        .then(response => res.send(response));
}));
api.listen(port || 8888, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
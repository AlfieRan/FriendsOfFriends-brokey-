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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitConnection = void 0;
class TwitConnection {
    getUserOauthLink(redirect) {
        return __awaiter(this, void 0, void 0, function* () {
            const URL = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${process.env.ClientID}&scope=follows.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`;
            return URL;
        });
    }
}
exports.TwitConnection = TwitConnection;
//# sourceMappingURL=TwitterApi.js.map
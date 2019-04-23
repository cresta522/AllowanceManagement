"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class ServerAPI {
    bootServer() {
        // サーバ設定
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        // サーバ起動
        server.listen('5000');
    }
    requestHandler(request, response) {
        response.end('Call From ServeAPI Class');
    }
}
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=serverModule.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverModule_1 = require("./modules/serverModule");
class Main {
    constructor() {
        const serverAPI = new serverModule_1.ServerAPI();
        serverAPI.bootServer();
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map
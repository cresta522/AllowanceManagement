import {ServerAPI} from "./serverModule";

class Main {
    constructor(){
        const serverAPI = new ServerAPI();
        serverAPI.bootServer();
    }
}

const main = new Main();
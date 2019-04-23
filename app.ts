import {ServerAPI} from "./modules/serverModule";

class Main {
    constructor(){
        const serverAPI = new ServerAPI();
        serverAPI.bootServer();
    }
}

const main = new Main();
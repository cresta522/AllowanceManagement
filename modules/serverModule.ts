import * as http from "http";

export class ServerAPI {
    public bootServer(): void{
        // サーバ設定
        const server: http.Server = http.createServer(
            (request: http.IncomingMessage, response: http.ServerResponse) => 
                this.requestHandler(request, response));
        
        // サーバ起動
        server.listen('5000');
    }
    
    private requestHandler(request: http.IncomingMessage, response: http.ServerResponse): void{
        response.end('Call From ServeAPI Class');
    }
}
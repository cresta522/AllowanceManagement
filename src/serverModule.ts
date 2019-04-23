import * as Express from 'express';

export class ServerAPI {
    public bootServer(): void{
        // サーバ設定
        const app = Express();
        
        app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
          return res.send('Hello Nyanko.');
        });
        
        app.listen(5000, () => {
          console.log('Listen on port 3000.');
        });
    }
}
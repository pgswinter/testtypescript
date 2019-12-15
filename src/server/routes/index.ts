import { Application, Request, Response, NextFunction } from "express";

export default (app: Application) => {
    app.get('/api', (_req: Request,res: Response, next: NextFunction) => {
        res.status(200).send({
            message: 'Welcome to the bookStore API!',
        });
        next();
    });
};
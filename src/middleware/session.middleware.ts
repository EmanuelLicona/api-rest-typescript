import { Request, Response, NextFunction } from 'express';

const sessionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hola desde el middleware");
  next();
}

export { sessionMiddleware };
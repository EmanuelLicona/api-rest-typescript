import { Request, Response } from 'express';

const registerCtrl = (req: Request, res: Response) => {
  const { body } = req;

  res.send(body);
}

const loginCtrl = (req: Request, res: Response) => {
  res.send('Login');
}

export { registerCtrl, loginCtrl };
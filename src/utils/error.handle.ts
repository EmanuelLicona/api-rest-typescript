import { Response } from 'express';

const handleHttp = (res: Response, error: string, e?: object | unknown, status?: number) => {
  res.status(status || 500);
  res.send({ error });

  console.error(e);
}

export { handleHttp };
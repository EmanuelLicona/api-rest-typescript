import { Request, Response, Router } from 'express';

const router = Router();

router.get('/items', (req: Request, res: Response) => {
  res.send('Item');
});


export { router as itemRouter };
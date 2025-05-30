import { Request, Response } from 'express';

const getItem = (req: Request, res: Response) => {
  res.status(200);
  res.send('Item');
}

const getItems = (req: Request, res: Response) => {
  res.send('Items');
}

const createItem = (req: Request, res: Response) => {
  res.send('Create Item');
}

const updateItem = (req: Request, res: Response) => {
  res.send('Update Item');
}

const deleteItem = (req: Request, res: Response) => {
  res.send('Delete Item');
}


export { getItem, getItems, createItem, updateItem, deleteItem };
import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { getCar, getCars, insertCar } from '../services/item.service';

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();

    res.json(response);
  } catch {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
}

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await getCar(id);

    if (!item) {
      handleHttp(res, 'Item not found', null, 404);
    }

    res.json(item);
  } catch {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
}


const createItem = async (req: Request, res: Response) => {
  try {
    const response = await insertCar(req.body);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM', e);
  }
}

const updateItem = (req: Request, res: Response) => {
  res.send('Update Item');
}

const deleteItem = (req: Request, res: Response) => {
  res.send('Delete Item');
}


export { getItem, getItems, createItem, updateItem, deleteItem };
import { Router } from 'express';
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/item.controller';
import { logMiddleware } from '../middleware/logs.middleware';

const router = Router();

router.get('/', getItems);

// router.get('/:id', logMiddleware, getItem);

router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
router.use(logMiddleware);

export { router };
import express from 'express';
import { getCat, getCats, postCat }  from '../controllers/catController.js';

const catRouter = express.Router();

catRouter.get('/', getCats);
catRouter.get('/:id', getCat);
catRouter.post('/', postCat);
// catRouter.post('/multiple', postCats);

export default catRouter;
import { Router } from 'express';
import multer from 'multer';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);


export default routes;
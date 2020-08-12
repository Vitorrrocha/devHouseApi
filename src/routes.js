import { Router } from 'express';
import multer from 'multer';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import uploadConfig from './config/upload';
import DashboardController from './controllers/DashboardController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/dashboard', DashboardController.show);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);

routes.get('/houses', HouseController.index);

routes.put('/houses/:house_id', upload.single('thumbnail') ,HouseController.update);

routes.delete('/houses', HouseController.destroy);


export default routes;
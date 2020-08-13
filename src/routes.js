import { Router } from 'express';
import multer from 'multer';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import uploadConfig from './config/upload';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';

const routes = new Router();
const upload = multer(uploadConfig);


// SESSIONS
routes.post('/sessions', SessionController.store);

// HOUSES
routes.post('/houses', upload.single('thumbnail'), HouseController.store);

routes.get('/houses', HouseController.index);

routes.put('/houses/:house_id', upload.single('thumbnail') ,HouseController.update);

routes.delete('/houses', HouseController.destroy);

// DASHBOARD
routes.get('/dashboard', DashboardController.show);

// RESERVE
routes.post('/houses/:house_id/reserve', ReserveController.store);






export default routes;
import express from 'express';
import ClassController from './controller/ClassController';
import ConnectionController from './controller/ConnectionsControler';

const routes = express.Router();
const classController = new ClassController();
const connectionController = new ConnectionController();
interface ScheduleItem {
	week_day: number;
	from: string;
	to: string;
}

routes.post('/classes', classController.create);
routes.get('/classes', classController.index);
routes.post('/connection', connectionController.create);
routes.get('/connection', connectionController.index);

export default routes;

import { Request, Response, request } from 'express';
import db from '../database/connections';

export default class ConnectionController {
	async create(req: Request, res: Response) {
		const { user_id } = req.body;

		await db('connection').insert({ user_id });

		return res.status(201).send();
	}

	async index(req: Request, res: Response) {
		const countConnections = await db('connection').count('* as total');
		const { total } = countConnections[0];
		res.json(total);
	}
}

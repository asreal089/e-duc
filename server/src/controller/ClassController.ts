import { Request, Response, request } from 'express';
import db from '../database/connections';
import convertHourToMinutes from '../lib/convertHourToMinutes';
interface ScheduleItem {
	week_day: number;
	from: string;
	to: string;
}

export default class ClassController {
	async create(req: Request, res: Response) {
		const {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost,
			schedule,
		} = req.body;

		const trx = await db.transaction();
		try {
			const insert_users_ids = await trx('user').insert({
				name,
				avatar,
				whatsapp,
				bio,
			});
			const insert_classes_ids = await trx('class').insert({
				subject,
				cost,
				user_id: insert_users_ids[0],
			});

			const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
				return {
					class_id: insert_classes_ids[0],
					week_day: scheduleItem.week_day,
					from: convertHourToMinutes(scheduleItem.from),
					to: convertHourToMinutes(scheduleItem.to),
				};
			});

			await trx('class_schedule').insert(classSchedule);

			await trx.commit();

			return res.status(201).send();
		} catch (error) {
			trx.rollback();
			return res.status(400).json({
				error: 'erro ao criar a classe',
			});
		}
	}

	async index(req: Request, res: Response) {
		const filters = req.query;

		console.log(filters);

		if (!filters.week_day || !filters.subject || !filters.time) {
			return res.status(400).json({
				error: 'Falta filtros de busca',
			});
		}

		const time = filters.time as String;
		const week_day = filters.week_day as String;
		const subject = filters.subject as String;

		const timeInMinutes = convertHourToMinutes(time);

		const classes = await db('class')
			.where('class.subject', subject)
			.where('class_schedule.from', timeInMinutes)
			.where('class_schedule.week_day', week_day)
			.innerJoin('user', 'class.user_id', '=', 'user.id')
			.innerJoin(
				'class_schedule',
				'class_schedule.class_id',
				'=',
				'class.id'
			)
			.select(['class.*', 'user.*', 'class_schedule.*']);

		return res.json(classes);
	}
}

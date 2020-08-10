import React from 'react';
import WhatsAppIcon from '../../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../../services/api';

export interface Teacher {
	id: number;
	name: string;
	avatar: string;
	whatsapp: string;
	bio: string;
	subject: string;
	cost: number;
}

interface TeacherItemProps {
	teacher: Teacher;
}

async function handleContact(user_id: number, whatsapp: string) {
	const res = await api.post('connection', { user_id });
	alert('conexão feita');
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
	return (
		<main>
			<article className="teacher-item">
				<header>
					<img src={teacher.avatar} alt={teacher.name} />
					<div>
						<strong>{teacher.name}</strong>
						<span>{teacher.subject}</span>
					</div>
				</header>
				<p>{teacher.bio}</p>
				<footer>
					<p>
						preco/hora <strong>{teacher.cost}</strong>
					</p>
					<button
						type="button"
						onClick={() => {
							handleContact(teacher.id, teacher.whatsapp);
						}}
					>
						<img src={WhatsAppIcon} alt="whatsapp" />
						Entrar em contato
					</button>
				</footer>
			</article>
		</main>
	);
};

export default TeacherItem;

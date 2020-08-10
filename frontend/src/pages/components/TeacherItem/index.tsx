import React from 'react';
import WhatsAppIcon from '../../../assets/images/icons/whatsapp.svg';

import './styles.css';

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
					<button type="button">
						<img src={WhatsAppIcon} alt="whatsapp" />
						Entrar em contato
					</button>
				</footer>
			</article>
		</main>
	);
};

export default TeacherItem;

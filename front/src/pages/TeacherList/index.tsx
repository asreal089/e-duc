import React from 'react';
import PageHeader from '../components/PageHeader';

import './styles.css';
import TeacherItem from '../components/TeacherItem';

function TeacerList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Esses são professores disponiveis no momento.">
				<form id="search-teachers">
					<div className="input-block">
						<label htmlFor="subject">Matéria</label>
						<input type="text" id="subject" />
					</div>
					<div className="input-block">
						<label htmlFor="week_day">Dia da semana:</label>
						<input type="text" id="subject" />
					</div>
					<div className="input-block">
						<label htmlFor="time">Hora:</label>
						<input type="text" id="subject" />
					</div>
				</form>
			</PageHeader>
			<TeacherItem />
			<TeacherItem />
			<TeacherItem />
		</div>
	);
}

export default TeacerList;
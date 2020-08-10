import React from 'react';
import PageHeader from '../components/PageHeader';
import TeacherItem from '../components/TeacherItem';
import Input from '../components/Input';
import './styles.css';

function TeacerList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Esses são professores disponiveis no momento.">
				<form id="search-teachers">
					<Input name="subject" label="Matéria"></Input>
					<Input name="week_day" label="Dia da semana"></Input>
					<Input type="time" name="time" label="Hora"></Input>
				</form>
			</PageHeader>
			<TeacherItem />
			<TeacherItem />
			<TeacherItem />
		</div>
	);
}

export default TeacerList;

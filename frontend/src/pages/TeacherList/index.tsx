import React, { useState, FormEvent } from 'react';
import PageHeader from '../components/PageHeader';
import TeacherItem, { Teacher } from '../components/TeacherItem';
import Input from '../components/Input';
import Select from '../components/Select';
import './styles.css';
import api from '../../services/api';

function TeacherList() {
	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	async function searchTeachers(e: FormEvent) {
		e.preventDefault();
		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time,
			},
		});

		setTeachers(response.data);
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Esses são professores disponiveis no momento.">
				<form id="search-teachers" onSubmit={searchTeachers}>
					<Select
						name="subject"
						label="materia"
						options={[
							{ value: 'Portugues', label: 'Portugues' },
							{ value: 'Matemática', label: 'Matemática' },
							{ value: 'Historia', label: 'Historia' },
							{ value: 'Geografica', label: 'Geografica' },
							{ value: 'Fisica', label: 'Fisica' },
							{ value: 'Quimica', label: 'Quimica' },
							{ value: 'Biologia', label: 'Biologia' },
						]}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
					></Select>
					<Select
						name="subject"
						label="materia"
						options={[
							{ value: '1', label: 'Domingo' },
							{ value: '2', label: 'Segunda' },
							{ value: '3', label: 'Terça' },
							{ value: '4', label: 'Quarta' },
							{ value: '5', label: 'Quinta' },
							{ value: '6', label: 'Sexta' },
							{ value: '7', label: 'Sabado' },
						]}
						onChange={(e) => {
							setWeekDay(e.target.value);
						}}
					></Select>
					<Input
						type="time"
						name="time"
						label="Hora"
						onChange={(e) => {
							setTime(e.target.value);
						}}
					></Input>
					<button type="submit">Buscar</button>
				</form>
			</PageHeader>
			<main>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />;
				})}
			</main>
		</div>
	);
}

export default TeacherList;

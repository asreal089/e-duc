import React, { useState, FormEvent } from 'react';
import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../components/TextArea';
import Select from '../components/Select';
import api from '../../services/api';
import './styles.css';

function TeacherForm() {
	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: '', to: '' },
	]);

	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [bio, setBio] = useState('');
	const [subject, setSubject] = useState('');
	const [cost, setCost] = useState('');

	function addNewScheduleItem() {
		setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
	}

	function handleSubmitForm(e: FormEvent) {
		e.preventDefault();
		api.post('classes', {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost: Number(cost),
			schedule: scheduleItems,
		})
			.then(() => {
				alert('cadastro realizado');
			})
			.catch(() => {
				alert('erro ao criar cadastros');
			});
		console.log(name, avatar, whatsapp, bio, subject, cost, scheduleItems);
	}

	function setScheduleItemValue(
		position: number,
		field: string,
		value: string
	) {
		const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
			if (index == position) {
				return { ...scheduleItem, [field]: value };
			}
			return scheduleItem;
		});
		setScheduleItems(updatedScheduleItem);
	}

	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="Que legal que você via dar aulas"
				description="O primeiro passo é preencher sua inscrição:"
			></PageHeader>
			<main>
				<form onSubmit={handleSubmitForm}>
					<fieldset>
						<legend>Seus dados:</legend>
						<Input
							name="name"
							label="Nome"
							onChange={(e) => {
								setName(e.target.value);
							}}
						></Input>
						<Input
							name="avatar"
							label="Link da sua imagem"
							onChange={(e) => {
								setAvatar(e.target.value);
							}}
						></Input>
						<Input
							name="whatsapp"
							label="Whatsapp"
							onChange={(e) => {
								setWhatsapp(e.target.value);
							}}
						></Input>
						<Textarea
							name="bio"
							label="Sua bio"
							onChange={(e) => {
								setBio(e.target.value);
							}}
						></Textarea>
					</fieldset>

					<fieldset>
						<legend>Sobre as aulas:</legend>
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
						<Input
							name="cost"
							label="Preço hora/aula"
							onChange={(e) => {
								setCost(e.target.value);
							}}
						></Input>
					</fieldset>
					<fieldset>
						<legend>
							Horario disponível
							<button type="button" onClick={addNewScheduleItem}>
								+ novo horário
							</button>
						</legend>
						{scheduleItems.map((scheduleItem, index) => {
							return (
								<div className="schedule-item">
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
										onChange={(e) =>
											setScheduleItemValue(
												index,
												'week_day',
												e.target.value
											)
										}
									></Select>
									<Input
										type="time"
										name="from"
										label="De"
										onChange={(e) =>
											setScheduleItemValue(
												index,
												'from',
												e.target.value
											)
										}
									></Input>
									<Input
										type="time"
										name="to"
										label="Até"
										onChange={(e) =>
											setScheduleItemValue(
												index,
												'to',
												e.target.value
											)
										}
									></Input>
								</div>
							);
						})}
					</fieldset>
					<footer>
						<p>
							<img src={WarningIcon} alt="Aviso Importante" />
							Importante <br />
							Preencha todos os dados.
						</p>
						<button type="submit">Salvar Cadastro</button>
					</footer>
				</form>
			</main>
		</div>
	);
}

export default TeacherForm;

import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../components/TextArea';
import './styles.css';
import Select from '../components/Select';

function TeacherForm() {
	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: '', to: '' },
	]);

	function addNewScheduleItem() {
		console.log('cai aqui');
		setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
	}

	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="Que legal que você via dar aulas"
				description="O primeiro passo é preencher sua inscrição:"
			></PageHeader>
			<main>
				<fieldset>
					<legend>Seus dados:</legend>
					<Input name="name" label="Nome"></Input>
					<Input name="avatar" label="Link da sua imagem"></Input>
					<Input name="whatsapp" label="Whatsapp"></Input>
					<Textarea name="bio" label="Sua bio"></Textarea>
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
					></Select>
					<Input name="cost" label="Preço hora/aula"></Input>
				</fieldset>
				<fieldset>
					<legend>
						Horario disponível
						<button type="button" onClick={addNewScheduleItem}>
							+ novo horário
						</button>
					</legend>
					{scheduleItems.map((scheduleItem) => {
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
								></Select>
								<Input
									type="time"
									name="from"
									label="De"
								></Input>
								<Input
									type="time"
									name="to"
									label="Até"
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
					<button type="button">Salvar Cadastro</button>
				</footer>
			</main>
		</div>
	);
}

export default TeacherForm;

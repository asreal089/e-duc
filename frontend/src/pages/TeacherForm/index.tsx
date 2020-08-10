import React from 'react';
import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../components/TextArea';
import './styles.css';
import Select from '../components/Select';

function TeacherForm() {
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

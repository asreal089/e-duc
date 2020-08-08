import React from 'react';
import WhatsAppIcon from '../../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
	return (
		<main>
			<article className="teacher-item">
				<header>
					<img
						src="https://pbs.twimg.com/profile_images/1407063196/liliane_-_grande_400x400.jpg"
						alt="Liliane Marinho"
					/>
					<div>
						<strong>Liliane Marinho</strong>
						<span>Geografia e Matemática</span>
					</div>
				</header>
				<p>
					Professora de ensino fundamental.
					<br />
					<br />
					Dá aulas de quimica e geografia
				</p>
				<footer>
					<p>
						preco/hora <strong>R$200</strong>
					</p>
					<button type="button">
						<img src={WhatsAppIcon} alt="whatsapp" />
						Entrar em contato
					</button>
				</footer>
			</article>
		</main>
	);
}

export default TeacherItem;

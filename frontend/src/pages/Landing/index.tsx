import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function Lading() {
	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={LogoImg} alt="E-duc" />
					<h2>Sua plataforma de estudos</h2>
				</div>
				<img
					src={LandingImg}
					alt="Plataforma de Estudos"
					className="hero-image"
				/>
				<div className="buttons-container">
					<Link to="/study" className="study">
						<img src={StudyIcon} alt="" />
						Estudar
					</Link>
					<Link to="/give-classes" className="give-classes">
						<img src={GiveClassesIcon} alt="" />
						Dar Aulas
					</Link>
				</div>

				<span className="total-connections">
					total de 200 conexões já realizadas{' '}
					<img src={PurpleHartIcon} alt="" />
				</span>
			</div>
		</div>
	);
}

export default Lading;

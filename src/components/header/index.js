import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button';

import Container from 'react-bootstrap/Container';

import styles from './style.module.scss';

import Fade from 'react-reveal/Fade';

const Header = (props) => {
	if (props.subheader) {
		return (
			<Container className={styles['sub-header']}>
				<Fade bottom>
					<h3 className={styles['title']}>{props.title}</h3>
					{props.description && (
						<p className={styles['description']}>{props.description}</p>
					)}
					{props.buttonText && (
						<Link to={props.linkTo}>
							<Button text={props.buttonText} />
						</Link>
					)}
				</Fade>
			</Container>
		);
	}
	if (props.linkheader) {
		return (
			<Container className={styles['sub-header']}>
				<Fade up>
					<h3 className={styles['title']}>{props.className}</h3>
					
				</Fade>
				<h3 className={styles['title']}>{props.title}</h3>
				{props.description && (
					<p className={styles['description']}>{props.description}</p>
				)}
				{props.buttonText && (
					<a href={props.linkTo}>
						<Button text={props.buttonText} style={{fontSize:'10px'}}/>
					</a>
				)}
			</Container>
		);
	}

	return (
		<Container className={styles['header']}>
			<h1 className={styles['title']}>{props.title}</h1>
			<h5 className={styles['subtitle']}>{props.subtitle}</h5>
			{props.description && (
				<p className={styles['description']}>{props.description}</p>
			)}
		</Container>
	);
};

export default Header;

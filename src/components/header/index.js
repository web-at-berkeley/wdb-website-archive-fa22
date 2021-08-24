import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button';

import Container from 'react-bootstrap/Container';

import styles from './style.module.scss';

const Header = (props) => {
	if (props.subheader) {
		return (
			<Container className={styles['sub-header']}>
				<h3 className={styles['title']}>{props.title}</h3>
				{props.description && (
					<p className={styles['description']}>{props.description}</p>
				)}
				{props.buttonText && (
					<Link to={props.linkTo}>
						<Button text={props.buttonText} />
					</Link>
				)}
			</Container>
		);
	}
	if (props.linkheader) {
		return (
			<Container className={styles['sub-header']}>
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

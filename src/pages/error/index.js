import React from 'react';

import Container from 'react-bootstrap/Container';

import ErrorImg from './404.png';

import styles from './style.module.scss';

const Error = () => {
	return (
		<div>
			<Container className={styles['error-page']} >

				<img className={styles['error-img']} src={ErrorImg}/>

			</Container>
		</div>
	);
};

export default Error;

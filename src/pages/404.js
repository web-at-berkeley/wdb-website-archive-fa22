import React from 'react';
import { SiteNavbar, Footer } from '../components';
// import { Link } from '@reach/router';

import Error from '../img/404.png';

import styles from './css/Error.module.scss';

const Error404 = () => {
	return (
		<div className={styles['error']}>
			<SiteNavbar />

			<div className={styles['body']}>
				<img
					src={Error}
					alt="404 Page Not Found"
					className={styles['message']}
				/>
			</div>

			<Footer />
		</div>
	);
};

export default Error404;

import React from 'react';

import styles from './style.module.scss';

import breakpoints from '../../breakpoints.module.scss';

const Showcase = ({ title, subtitle, image, imageMobile }) => {
	return (
		<div className={styles['container']}>
			<h5 style={subtitle ? { marginBottom: '.5rem' } : null}>{title}</h5>
			<h6>{subtitle}</h6>
			{imageMobile ? (
				<>
					<img src={image} alt={title} className={breakpoints['desktop']} />
					<img
						src={imageMobile}
						alt={title}
						className={breakpoints['mobile']}
					/>
				</>
			) : (
				<img src={image} alt={title} />
			)}
		</div>
	);
};

export default Showcase;

import React from 'react';

import socials from './constants/Socials';
import icons from './constants/Icons';

import Col from 'react-bootstrap/Col';

import styles from './style.module.scss';

const Profile = ({ data }) => {
	console.log(data);
	return (
		<Col className={styles['profile']}>
			<img className={styles['photo']} src={data.image} alt={data.name} />

			<h5 className={styles['name']} id="name">
				{data.name}
			</h5>

			<h6 className={styles['role']} id="role">
				{data.role}
			</h6>

			<div className={styles['socials']}>
				{socials.map(({ name, id }) => {
					return (
						data[id] && (
							<a
								href={data[id]}
								id={id}
								target="_blank"
								rel="noopener noreferrer"
								key={id}
							>
								<img src={icons[name]} alt={name} />
							</a>
						)
					);
				})}
			</div>
		</Col>
	);
};

export default Profile;

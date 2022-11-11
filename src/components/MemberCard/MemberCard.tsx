import EmailIcon from './img/email.png';
import LinkedInIcon from './img/linkedin.png';
import WebsiteIcon from './img/personal.png';

import Col from 'react-bootstrap/Col';

import styles from './style.module.scss';
import { Member } from '../../models/Member';
import { useEffect, useState } from 'react';

interface MemberCard_Props {
	member: Member;
}

const getImage = (filename: string) => {
	try {
		const img = require(`../../assets/pfps/${filename}`).default;
		return img;
	} catch (e) {
		return '';
	}
};

const MemberCard = ({ member }: MemberCard_Props) => {
	const [image, setImage] = useState(undefined);

	useEffect(() => {
		const init = async () => {
			const img = await getImage(member.image);
			setImage(img);
		};
		init();
	}, []);

	return (
		<Col className={styles['profile']}>
			<img
				className={styles['photo']}
				src={!!image ? image : ''}
				alt={`${member.firstName} Profile`}
			/>

			<h5 className={styles['name']} id="name">
				{!!member.nickname
					? `${member.nickname} ${member.lastName}`
					: `${member.firstName} ${member.lastName}`}
			</h5>

			<h6 className={styles['role']} id="role">
				{member.roles.join(', ')}
			</h6>

			<div className={styles['socials']}>
				{!!member.linkedIn && (
					<a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
						<img src={LinkedInIcon} alt={`${member.firstName} LinkedIn`} />
					</a>
				)}
				{!!member.website && (
					<a href={member.website} target="_blank" rel="noopener noreferrer">
						<img src={WebsiteIcon} alt={`${member.firstName} Website`} />
					</a>
				)}
				{!!member.email && (
					<a
						href={`mailto:${member.email}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={EmailIcon} alt={`${member.firstName} Email`} />
					</a>
				)}
			</div>
		</Col>
	);
};

export default MemberCard;

import Col from 'react-bootstrap/Col';
import { Project } from '../../models/Project';

import styles from './ProjectCard.module.scss';

interface Project_Props {
	project: Project;
}

const ProjectCard = ({ project }: Project_Props) => {
	const { name, cover, color, link } = project;

	return (
		<Col sm={12} md={6} lg={4} className={styles['project']}>
			{link ? (
				<a href={link} target="_blank" rel="noreferrer">
					<img
						src={cover}
						alt={name}
						style={{ boxShadow: `4px 4px 21px ${color}` }}
					/>
				</a>
			) : (
				<img
					src={cover}
					alt={name}
					style={{ boxShadow: `4px 4px 21px ${color}` }}
				/>
			)}
		</Col>
	);
};

export default ProjectCard;

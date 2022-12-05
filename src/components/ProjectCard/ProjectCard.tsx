import Col from 'react-bootstrap/Col';
import { Project } from '../../models/Project';

import styles from './ProjectCard.module.scss';

interface Project_Props {
	project: Project;
}

const ProjectCard = ({ project }: Project_Props) => {
	const { name, cover, color, link } = project;

	return (
		<div
			className={styles['project']}
			style={{ boxShadow: `4px 4px 21px ${color}` }}
		>
			{link ? (
				<a href={link} target="_blank" rel="noreferrer">
					<img src={cover} alt={name} />
				</a>
			) : (
				<img src={cover} alt={name} />
			)}
		</div>
	);
};

export default ProjectCard;

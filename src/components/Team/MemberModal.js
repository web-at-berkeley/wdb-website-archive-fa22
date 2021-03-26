import React from 'react';

import Modal from 'react-bootstrap/Modal';

import { ReactComponent as Linkedin } from '../../img/team/linkedin.svg';
import { ReactComponent as Github } from '../../img/team/github.svg';

import './css/MemberModal.scss';

const MemberModal = ({ data, ...props }) => {
	return (
		<Modal
			show={props.show}
			onHide={props.close}
			className="member-modal"
			centered
		>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<div className="social-row">
					<a href={data.linkedin} id="linkedin">
						<Linkedin alt="Linkedin" className="social-icon linkedin" />
					</a>
					<img src={data.image} alt={data.name} />
					<a href={data.github} id="github">
						<Github alt="Github" className="social-icon github" />
					</a>
				</div>
				<h5 className="name" id="name">
					{data.name}
				</h5>
				<p className="role" id="role">
					{data.role}
				</p>
				<p className="description" id="description">
					{data.description}
				</p>
			</Modal.Body>
		</Modal>
	);
};

export default MemberModal;

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import BlackArrow from './img/arrow-black.svg';
import Bars from './img/bars.svg';
import RainbowLogo from '../../img/logo-rainbow.png';

import styles from './styles/mobile.module.scss';
import classnames from 'classnames';

const SiteNavbar = ({ landing }) => {
	const [show, setShow] = useState(false);
	const toggleShow = () => {
		setShow(!show);
	};

	const clearState = () => {
		setShow(!show);
	}


	return (
		<div className={styles['container']}>
			{!landing && (
				<Link to="/">
					<img
						className={styles['logo']}
						src={RainbowLogo}
						alt="Web Development at Berkeley"
					/>
				</Link>
			)}

			<div className={styles['navbar']}>
				<div className={styles['lines']}>
					<img src={Bars} alt="open navbar" onClick={toggleShow} />
				</div>

				{show && (
					<div className={styles['nav-container']}>
						<div className={styles['nav']}>
							<Link to="/about"  onClick={clearState} className={styles['nav-link']}>
								About Us
							</Link>
							<Link to="/initiatives"  onClick={clearState} className={styles['nav-link']}>
								Our Initiatives
								<img src={BlackArrow} alt="" className={styles['arrow']} />
							</Link>
							<Link
								to="/education"
								onClick={clearState}
								className={classnames(
									styles['nav-link'],
									styles['dropdown-link']
								)}
							>
								Education
							</Link>
							<Link
								to="/bootcamp"
								onClick={clearState}
								className={classnames(
									styles['nav-link'],
									styles['dropdown-link']
								)}
							>
								Product Bootcamp
							</Link>
							<Link
								to="/industry"
								onClick={clearState}
								className={classnames(
									styles['nav-link'],
									styles['dropdown-link']
								)}
							>
								Industry
							</Link>
							<Link to="/members"  onClick={clearState} className={styles['nav-link']}>
								Team
								<img src={BlackArrow} alt="" className={styles['arrow']} />
							</Link>
							<Link
								to="/alumni"
								onClick={clearState}
								className={classnames(
									classnames(styles['nav-link'], styles['dropdown-link'])
								)}
							>
								Alumni
							</Link>
							<Link to="/decal"  onClick={clearState} className={styles['nav-link']}>
								DeCal
							</Link>
							<Link to="/projects"  onClick={clearState} className={styles['nav-link']}>
								Projects
							</Link>
							<Link to="/join"  onClick={clearState} className={styles['nav-link']}>
								Join Us
							</Link>
							<Link to="/work-with-us"  onClick={clearState} className={styles['nav-link']}>
								Work With Us
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>

		// <Navbar bg="transparent" expand="lg" className={styles['navbar']}>
		// 	<Navbar.Brand href="#home" className={styles['logo']}>
		// 		{!landing && (
		// 			<Link to="/">
		// 				<img src={Logo} alt="Web Development at Berkeley" />
		// 			</Link>
		// 		)}
		// 	</Navbar.Brand>
		// 	<Navbar.Toggle aria-controls="basic-navbar-nav" />
		// 	<Navbar.Collapse id="basic-navbar-nav">
		// 		<Nav className={`${styles['nav']} ml-auto`}>
		// 			<Link to="/about">About Us</Link>
		// 			<Link to="/initiatives">Our Initiatives</Link>
		// 			<Link to="/members">Team</Link>
		// 			<Link to="/decal">DeCal</Link>
		// 			<Link to="/projects">Projects</Link>
		// 			<Link to="/join">Join Us</Link>
		// 			<Link to="/work-with-us">Work With Us</Link>
		// 		</Nav>
		// 	</Navbar.Collapse>
		// </Navbar>
	);
};

export default SiteNavbar;

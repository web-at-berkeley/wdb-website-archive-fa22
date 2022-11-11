import React from 'react';

import { Link } from 'react-router-dom';

import Blobs from './img/blobs.png';
import BlackArrow from '../../assets/icons/arrow-black.svg';
import BlackLogo from '../../assets/icons/logo-black.png';
import RainbowLogo from '../../assets/icons/logo-rainbow.png';

import styles from './styles/default.module.scss';

const SiteNavbar = ({ landing }) => {
	let Logo = RainbowLogo;

	if (landing) {
		Logo = BlackLogo;
	}

	return (
		<div className={styles['container']}>
			<img src={Blobs} alt="" className={styles['blobs']} />
			<div className={styles['top']}>
				<div className={styles['logo']}>
					<Link to="/">
						<img src={Logo} alt="Web Development at Berkeley" />
					</Link>
				</div>
				<div className={styles['navbar']}>
					<div className={styles['bubble']} />
					<div className={styles['nav']}>
						<Link to="/about" className={styles['nav-link']}>
							About Us
						</Link>
						<div className={styles['nav-item']}>
							<div className={styles['trigger']}>
								<Link to="/initiatives" className={styles['nav-link']}>
									Our Initiatives
									<img src={BlackArrow} alt="" className={styles['arrow']} />
								</Link>
							</div>
							<div className={styles['spacer']}>
								<div className={styles['dropdown']}>
									<Link to="/education" className={styles['dropdown-link']}>
										DeCal
									</Link>
									<hr />
									<Link to="/bootcamp" className={styles['dropdown-link']}>
										Product Bootcamp
									</Link>
									<hr />
									<Link to="/industry" className={styles['dropdown-link']}>
										Industry
									</Link>
								</div>
							</div>
						</div>
						<div className={styles['nav-item']}>
							<div className={styles['trigger']}>
								<Link to="/members" className={styles['nav-link']}>
									Team
									<img src={BlackArrow} alt="" className={styles['arrow']} />
								</Link>
							</div>
							<div className={styles['spacer']}>
								<div className={styles['dropdown']}>
									<Link to="/members" className={styles['dropdown-link']}>
										Members
									</Link>
									<hr />
									<Link to="/alumni" className={styles['dropdown-link']}>
										Alumni
									</Link>
								</div>
							</div>
						</div>
						<Link to="/projects" className={styles['nav-link']}>
							Projects
						</Link>
						<Link to="/join" className={styles['nav-link']}>
							Join Us
						</Link>
						<Link to="/work-with-us" className={styles['nav-link']}>
							Work With Us
						</Link>
					</div>
				</div>
			</div>
			<div className={styles['bottom']}>
				<div className={styles['bubble']} />
				<div className={styles['bar']} />
			</div>
		</div>
	);
};

export default SiteNavbar;

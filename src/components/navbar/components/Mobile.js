import { useState } from 'react';

import { Link } from 'react-router-dom';

import BlackArrow from '../../../assets/icons/arrow-black.svg';
import Bars from '../img/bars.svg';
import RainbowLogo from '../../../assets/icons/logo-rainbow.png';

import styles from '../styles/mobile.module.scss';
import classnames from 'classnames';

const SiteNavbar = ({ landing }) => {
	const [show, setShow] = useState(false);
	const toggleShow = () => {
		setShow(!show);
	};

	const clearState = () => {
		setShow(!show);
	};

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
							<Link
								to="/about"
								onClick={clearState}
								className={styles['nav-link']}
							>
								About Us
							</Link>
							<Link
								to="/initiatives"
								onClick={clearState}
								className={styles['nav-link']}
							>
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
							<Link
								to="/members"
								onClick={clearState}
								className={styles['nav-link']}
							>
								Team
								<img src={BlackArrow} alt="" className={styles['arrow']} />
							</Link>
							<Link
								to="/members"
								onClick={clearState}
								className={classnames(
									classnames(styles['nav-link'], styles['dropdown-link'])
								)}
							>
								Members
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
							<a
								href="https://fullstackdecal.com/"
								onClick={clearState}
								className={styles['nav-link']}
							>
								DeCal
							</a>
							<Link
								to="/portfolio"
								onClick={clearState}
								className={styles['nav-link']}
							>
								Portfolio
							</Link>
							<Link
								to="/join"
								onClick={clearState}
								className={styles['nav-link']}
							>
								Join Us
							</Link>
							<Link
								to="/work-with-us"
								onClick={clearState}
								className={styles['nav-link']}
							>
								Work With Us
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SiteNavbar;

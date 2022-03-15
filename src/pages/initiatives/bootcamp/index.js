import React, { useState } from 'react';

import tenants from './constants/Tenants';
import Header from '../../../components/header';
import Button from '../../../components/button';
import timeline from './constants/Timeline';

import Carousel, {
	slidesToShowPlugin,
	arrowsPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import left from './img/leftarrow.png';
import right from './img/rightarrow.png';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Blobs from './img/blobs.png';
import Bg from './img/bg.png';

import styles from './style.module.scss';
import breakpoints from '../../../breakpoints.module.scss';
import classnames from 'classnames';

const Bootcamp = () => {
	const [category, setCategory] = useState('Mentorship');
	const [categoryData, setCategoryData] = useState(tenants[0].data);

	const toggleCategory = (newCategory, categoryData) => {
		setCategory(newCategory);
		setCategoryData(categoryData);
	};

	return (
		<main>
			<Header
				title="Product Bootcamp"
				subtitle="transforming students into professionals"
				description="WDB’s Product Bootcamp bridges the gap between classroom-based education and industry-level design and development through the use of siloed projects, real-world experiences, best practices and industry standards, and personalized mentorship. Our goal it to transform eager and motivated students with the prerequisite knowledge into fully-fledges designers and developers. "
			/>

			<Container className={styles['product-cont']}>
				<img src={Blobs} alt="" className={styles['blobs']} />
				{/* Desktop */}
				<div className={classnames(styles['tenants'], breakpoints['desktop'])}>
					<div className={styles['categories']}>
						{tenants.map(({ name, data }) => (
							<h5
								onClick={() => toggleCategory(name, data)}
								className={name === category && styles['active']}
							>
								{name}
							</h5>
						))}
					</div>
					<div className={styles['category-data']}>
						<img src={categoryData.image} alt={category} />
						<p>{categoryData.description}</p>
					</div>
				</div>
				{/* Mobile */}
				<div
					className={breakpoints['mobile']}
					style={{ marginTop: '2.5rem', width: '10% !important' }}
				>
					{tenants.map(({ name, data }) => (
						<div className={styles['tenant-card']}>
							<h5 className={styles['active']}>{name}</h5>
							<p>{data.description}</p>
							<img src={data.image} alt={category} />
						</div>
					))}
				</div>

				<h2 className={styles['title']}>Bootcamp Timeline</h2>
				<h4 className={styles['sub-mobile']}>Swipe to view timeline!</h4>
			</Container>

			<Carousel
				className={styles['carousel']}
				breakpoints={{
					770: {
						plugins: [
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 1,
								},
							},
						],
					},
					900: {
						plugins: [
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 2,
								},
							},
						],
					},
					1200: {
						plugins: [
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 3,
								},
							},
						],
					},
				}}
				plugins={[
					// 'infinite',
					{
						resolve: arrowsPlugin,
						options: {
							arrowLeft: (
								<img className={styles['carousel-arrow']} src={left}></img>
							),
							arrowLeftDisabled: (
								<img className={styles['carousel-arrow']} src={left}></img>
							),
							arrowRight: (
								<img className={styles['carousel-arrow']} src={right}></img>
							),
							arrowRightDisabled: (
								<img className={styles['carousel-arrow']} src={left}></img>
							),
							addArrowClickHandler: true,
						},
					},
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 4,
						},
					},
				]}
			>
				{timeline.map(({ image, title, description }) => (
					<div className={styles['col']}>
						<img src={image} alt="inclusion & acceptance" />
						<h6>{title}</h6>
						<p>{description}</p>
					</div>
				))}
			</Carousel>
			<div className={styles['interested']}>
				<img src={Bg} alt="" />
				<div className={styles['text']}>
					<h3>Interested?</h3>
					<p className={styles['blurb']}>
						Applications for our Product Bootcamp have closed for the Spring
						2022 semester. Be sure to check back here or on our “Join Us” page
						next semester to fill out our application! Don’t miss your chance to
						join a passionate team of builders, mentors, and creatives.
					</p>
					<Link to="/join">
						<Button text="Apply Here" />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Bootcamp;

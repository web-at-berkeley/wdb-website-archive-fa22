import React from 'react';
import Link from 'next/link';

import ErrorImage from '../img/error.png';

const ErrorPage = () => {
	return (
		<Link href="/">
			<a>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						height: '100vh',
					}}
				>
					<img
						src={ErrorImage}
						alt="error"
						style={{ width: '50%', marginLeft: '1%', marginTop: '.5rem' }}
						draggable="false"
					/>
				</div>
			</a>
		</Link>
	);
};

export default ErrorPage;

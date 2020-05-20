import React, { Component } from 'react';

import Particles from 'react-particles-js';

class ErrorPage extends Component {
	render() {
		return (
			<div>
				404 babyyyyyy
				<Particles
					params={{
						particles: {
							number: {
								value: 50,
							},
							size: {
								value: 3,
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: 'repulse',
								},
							},
						},
					}}
				/>
			</div>
		);
	}
}

export default ErrorPage;

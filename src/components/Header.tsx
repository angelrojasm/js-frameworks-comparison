import React from 'react';
import '../scss/header.scss';

const Header = () => {
	return (
		<div id='header'>
			<div className='flex-container'>
				<p className='hide-mobile'>Frontend Frameworks Comparison</p>
				<div id='links'>
					<a href='#motivation'>Motivation</a>
					<a href='#experiment'>Experiment</a>
					<a href='#projects'>Projects</a>
					<a href='#results'>Results</a>
				</div>
			</div>
		</div>
	);
};
export default Header;

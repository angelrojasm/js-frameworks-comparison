import React from 'react';
import '../scss/header.scss';

const Header = () => {
	return (
		<div id='header'>
			<p>Frontend Frameworks Comparison</p>
			<div id='links'>
				<a href='#motivation'>Motivation</a>
				<a href='#experiment'>Experiment</a>
				<a href='#projects'>Projects</a>
			</div>
		</div>
	);
};
export default Header;

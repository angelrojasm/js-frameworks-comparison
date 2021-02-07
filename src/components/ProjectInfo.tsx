import React from 'react';
import '../scss/ProjectInfo.scss';

type ProjectInfoProps = {
	language: string;
	languageLogo: any;
	frameworkAspects: string[];
	links: string[];
};

const ProjectInfo = ({ language, languageLogo, frameworkAspects, links }: ProjectInfoProps) => {
	const renderAspects = () => {
		return frameworkAspects.map((char, index) => {
			return (
				<li key={index} className='aspect'>
					{char}
				</li>
			);
		});
	};

	return (
		<div id='project-info'>
			<img src={languageLogo} alt='Language Logo' />
			<div id='body'>
				<h3 className='title'>{language} Todo</h3>
				<h4 className='title'>This Implementation Features:</h4>
				<div id='aspects'>{renderAspects()}</div>
				<div id='links'>
					<a href={links[0]} target='_blank' rel='noreferrer' className='link'>
						Source Code
					</a>
					<a href={links[1]} target='_blank' rel='noreferrer' className='link'>
						Deployment
					</a>
				</div>
			</div>
		</div>
	);
};
export default ProjectInfo;

import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import Header from './components/Header';
import ProjectInfo from './components/ProjectInfo';
import { useInView } from 'react-intersection-observer';
import {
	frameworks,
	frameworks2,
	ComponentImg,
	PackageImg,
	RenderingImg,
	AngularApp,
	ReactApp,
	VueApp,
} from './images/index';
import './scss/app.scss';

function App() {
	const [ref, inView] = useInView({
		threshold: 0.75,
		triggerOnce: true,
	});
	const [experimentText, textInView] = useInView({
		threshold: 1,
		triggerOnce: true,
	});
	const [experimentImages, imagesInView] = useInView({
		threshold: 0.75,
		triggerOnce: true,
	});
	const [projectsRef, projectsInView] = useInView({
		threshold: 0.25,
		triggerOnce: true,
	});
	const [canChange, setCanChange] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setCanChange(true);
		}, 2000);
	}, []);

	useEffect(() => {});

	return (
		<div id='app'>
			<Header />
			<div id='title-banner'>
				<img src={frameworks} alt='Javascript Frontend Frameworks' />
				<Animated
					animationIn='fadeInUp'
					animationInDelay={500}
					animationInDuration={1000}
					animationOut='fadeOut'
					isVisible={true}>
					<h3 className='title'>Javascript Frontend Frameworks Comparison</h3>
				</Animated>
			</div>
			<div className='container'>
				<div id='motivation' className='motivation' ref={ref}>
					<h3 className='sub-title'>Why?</h3>
					<div className='text-image-container'>
						<div className='text-section'>
							<Animated
								animationIn='fadeInUp'
								animationOut='fadeOut'
								isVisible={canChange ? inView : false}
								animateOnMount={false}>
								<p>
									After about a year and a half of working in frontend development with
									React, I have seen various functionalities and aspects that have made me
									question wether or not they could be done in different ways, and have
									incited my curiosity torwards different approaches to frontend
									development.
								</p>
							</Animated>
							<Animated
								animationIn='fadeInUp'
								animationOut='fadeOut'
								isVisible={canChange ? inView : false}
								animateOnMount={false}>
								<p>
									Seeing as how React is only one of many frameworks (or libraries) used to
									tackle frontend development in javascript, and how different frameworks
									have both emerging communities and a rising surge of professional
									implementations, I decided to compare and contrast three of the main
									frameworks of our current time.
								</p>
							</Animated>
						</div>
						<Animated
							animationIn='fadeInUp'
							animationOut='fadeOut'
							isVisible={canChange ? inView : false}
							animateOnMount={false}>
							<img src={frameworks2} alt='Frameworks' />
						</Animated>
					</div>
				</div>
				<div id='experiment'>
					<h3 className='sub-title'>Experiment</h3>
					<Animated
						animationIn='fadeInUp'
						animationOut='fadeOut'
						isVisible={canChange ? textInView : false}
						animateOnMount={false}>
						<div ref={experimentText}>
							<p>
								In order to be able to compare and get some firsthand experience on working
								with different frameworks, I decided to create a simple todo task management
								application in each of them. This way, I could accurately compare my
								experiences and the development process in each of the available frameworks.
								The application allows a user to type in a task in order to display it to a
								list, as well as check out the task as completed and delete it altogether.
							</p>
							<p>
								In these applications, I was able to utilize different aspects of frontend
								development that are equal to all frameworks, as well as many directives and
								patterns that are individual to each framework. This project is realtively
								simple, but at the same time contains enough complexity as to showcase some
								key aspects of development in each framework, such as:
							</p>
						</div>
					</Animated>
					<Animated
						animationIn='fadeInUp'
						animationOut='fadeOut'
						isVisible={canChange ? imagesInView : false}
						animateOnMount={false}>
						<div id='icons-container' ref={experimentImages}>
							<div className='icon'>
								<div className='image-container'>
									<img src={ComponentImg} alt='Component Interaction' />
								</div>
								<p>Component Interaction, Nesting and Data Sharing</p>
							</div>
							<div className='icon'>
								<div className='image-container'>
									<img
										style={{ borderRadius: '100%' }}
										src={PackageImg}
										alt='Dependency Management'
									/>
								</div>
								<p>Dependency Management, Injection and Package Implementation</p>
							</div>
							<div className='icon'>
								<div className='image-container'>
									<img src={RenderingImg} alt='Rendering' />
								</div>
								<p>Rerendering, Conditional Rendering and Lifecycle Methods</p>
							</div>
						</div>
					</Animated>
				</div>
			</div>
			<div id='projects'>
				<h3 className='sub-title'>Projects</h3>

				<Animated
					animationIn='fadeInUp'
					animationOut='fadeOut'
					isVisible={canChange ? projectsInView : false}
					animateOnMount={false}>
					<div id='projects-container' ref={projectsRef}>
						<ProjectInfo
							language='Vue.js'
							languageLogo={VueApp}
							frameworkAspects={[
								'Scoped Styles',
								'Third party library implementation',
								'Directives: v-bind, v-if, v-model, v-for',
								'Component prop sharing',
								'Event Handling: v-on',
							]}
							links={[
								'https://github.com/angelrojasm/vue-todo',
								'https://zealous-mirzakhani-2059dc.netlify.app',
							]}
						/>
						<ProjectInfo
							language='Angular.js'
							languageLogo={AngularApp}
							frameworkAspects={[
								'Typescript Classes',
								'Third party library implementation',
								'Directives: ngModel, ngIf, ngFor, ngClass',
								'Services and Dependency Injection',
								'Data Sharing with @Input()',
								'Event Emitting with @Output()',
							]}
							links={[
								'https://github.com/angelrojasm/angular-todo',
								'https://angelrojasm.github.io/angular-todo/',
							]}
						/>
						<ProjectInfo
							language='React.js'
							languageLogo={ReactApp}
							frameworkAspects={[
								'JSX',
								'Function Components',
								'React Hooks (useState, useEffect)',
								'Third party library implementation',
								'Prop Sharing and Event Handling',
							]}
							links={[
								'https://github.com/angelrojasm/react-todo',
								'https://angelrojasm.github.io/react-todo/',
							]}
						/>
					</div>
				</Animated>
			</div>
			<div id='footer'>
				<p>Authored By: Angel Rojas</p>
			</div>
		</div>
	);
}

export default App;

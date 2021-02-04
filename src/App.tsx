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
		threshold: 0.35,
		triggerOnce: true,
	});
	const [canChange, setCanChange] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setCanChange(true);
		}, 100);
	}, []);

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
								animationIn='slideInLeft'
								animationOut='slideInLeft'
								isVisible={canChange ? inView : false}
								animateOnMount={false}>
								<p>
									Curabitur dapibus mi velit, a rhoncus diam porttitor eu. Aliquam erat
									volutpat. In id nunc nisi. Nullam at urna ipsum. Donec sit amet auctor
									lacus, vel tristique quam. Vestibulum semper porta ligula, et lacinia
									augue efficitur nec. Quisque convallis placerat purus, a accumsan risus
									feugiat quis.
								</p>
							</Animated>
							<Animated
								animationIn='slideInLeft'
								animationOut='slideInLeft'
								isVisible={canChange ? inView : false}
								animateOnMount={false}>
								<p>
									Aenean diam nisi, vulputate vitae mi aliquet, euismod blandit quam.
									Aliquam erat volutpat. Donec quis scelerisque ex, et commodo mauris. Cras
									convallis dapibus lacus, sed condimentum dolor aliquet id. Aenean ac
									auctor ex. Nullam id aliquam neque. Etiam pellentesque eros justo, ac
									volutpat metus elementum sed. Praesent ultrices pellentesque purus, et
									lacinia lectus dapibus at. Duis consectetur neque neque, eget sagittis
									arcu placerat non. Vivamus sit amet vulputate odio, nec dictum nisl.
								</p>
							</Animated>
						</div>
						<Animated
							animationIn='slideInRight'
							animationOut='slideInRight'
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
								Curabitur dapibus mi velit, a rhoncus diam porttitor eu. Aliquam erat
								volutpat. In id nunc nisi. Nullam at urna ipsum. Donec sit amet auctor
								lacus, vel tristique quam. Vestibulum semper porta ligula, et lacinia augue
								efficitur nec. Quisque convallis placerat purus, a accumsan risus feugiat
								quis.
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
									<img src={PackageImg} alt='Dependency Management' />
								</div>
								<p>Dependency Management, Injection and Package Implementation</p>
							</div>
							<div className='icon'>
								<div className='image-container'>
									<img src={RenderingImg} alt='Rendering' />
								</div>
								<p>Component Re-rendering and Conditional Rendering</p>
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
							frameworkAspects={['lorem', 'ipsum', 'dolor']}
							links={[
								'https://github.com/angelrojasm/vue-todo',
								'https://zealous-mirzakhani-2059dc.netlify.app',
							]}
						/>
						<ProjectInfo
							language='Angular.js'
							languageLogo={AngularApp}
							frameworkAspects={['lorem', 'ipsum', 'dolor']}
							links={[
								'https://github.com/angelrojasm/angular-todo',
								'https://angelrojasm.github.io/angular-todo/',
							]}
						/>
						<ProjectInfo
							language='React.js'
							languageLogo={ReactApp}
							frameworkAspects={['lorem', 'ipsum', 'dolor']}
							links={[
								'https://github.com/angelrojasm/react-todo',
								'https://angelrojasm.github.io/react-todo/',
							]}
						/>
					</div>
				</Animated>
			</div>
		</div>
	);
}

export default App;

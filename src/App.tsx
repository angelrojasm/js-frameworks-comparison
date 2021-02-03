import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import Header from './components/Header';
import { useInView } from 'react-intersection-observer';
import frameworks from './images/React-JS-VS-Angular-JS-Vs-Vue-JS.png';
import frameworks2 from './images/frameworks2.jpg';
import './scss/app.scss';

function App() {
	const { ref, entry, inView } = useInView({
		threshold: 0.5,
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
					animationIn='fadeInDown'
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
				</div>
				<div id='projects'>
					<h3 className='sub-title'>Projects</h3>
				</div>
			</div>
		</div>
	);
}

export default App;

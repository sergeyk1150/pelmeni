import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const clickBack = () => {
		setActiveIndex((prev) => prev - 1);
	};

	const clickForward = (lastStep) => {
		setActiveIndex((prev) => prev + 1);
	};

	const startOver = () => {
		setActiveIndex(0);
	};

	let firstStep = activeIndex === 0 ? true : false;
	let lastStep = activeIndex === steps.length - 1 ? true : false;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								key={id}
								className={
									activeIndex >= index
										? styles['steps-item'] +
											' ' +
											styles.done +
											' ' +
											`${activeIndex === index ? styles.active : ''}`
										: styles['steps-item']
								}
							>
								<button
									onClick={() => {
										setActiveIndex(index);
									}}
									className={styles['steps-item-button']}
								>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={clickBack}
							disabled={firstStep ? true : false}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={lastStep ? startOver : clickForward}
						>
							{!lastStep ? 'Далее' : 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

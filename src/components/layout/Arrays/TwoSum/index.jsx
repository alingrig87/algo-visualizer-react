import React, { useState } from 'react';
import './style.css';

const TwoSum = () => {
	const [array, setArray] = useState(() => generateRandomArray());
	const [target, setTarget] = useState(() => generateRandomTarget());
	const [solvedIndexes, setSolvedIndexes] = useState([]);
	const [foundPair, setFoundPair] = useState(false);
	const [error, setError] = useState('');

	function generateRandomArray() {
		return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
	}

	function generateRandomTarget() {
		const randomIndex1 = Math.floor(Math.random() * 10);
		const randomIndex2 =
			(randomIndex1 + Math.floor(Math.random() * 9) + 1) % 10;
		return array[randomIndex1] + array[randomIndex2];
	}

	const solveArray = () => {
		if (foundPair) return;

		for (let i = 0; i < array.length; i++) {
			for (let j = i + 1; j < array.length; j++) {
				if (array[i] + array[j] === target) {
					setSolvedIndexes([i, j]);
					setFoundPair(true);
					return;
				}
			}
		}

		setError('No solution found for the current target.');
	};

	const restart = () => {
		setArray(generateRandomArray());
		setTarget(generateRandomTarget());
		setSolvedIndexes([]);
		setFoundPair(false);
		setError('');
	};

	return (
		<div className="two-sum">
			<h2>Two sum</h2>
			<p>
				Target: <span className="circle solved">{target}</span>
			</p>
			<div className="circle-container">
				{array.map((number, index) => (
					<div
						key={index}
						className={`circle ${
							solvedIndexes.includes(index) ? 'solved' : ''
						}`}
					>
						{number}
					</div>
				))}
			</div>
			<div className="button-container">
				<button onClick={solveArray}>Solve</button>
				<button onClick={restart}>Restart</button>
			</div>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
};

export default TwoSum;

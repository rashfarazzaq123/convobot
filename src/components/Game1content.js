import React, { useState } from 'react';

export default function Game1() {
	const questions = [
		{
			questionText: 'I ..... tennis every Sunday morning.',
			answerOptions: [
				{ answerText: 'playing', isCorrect: false },
				{ answerText: 'play', isCorrect: true },
				{ answerText: 'am playing', isCorrect: false },
				{ answerText: 'am play', isCorrect: false },
			],
		},
		{
			questionText: 'Jane..... her blue jeans today, but usually she wears a skirt or a dress.',
			answerOptions: [
				{ answerText: 'wears', isCorrect: false },
				{ answerText: 'wearing', isCorrect: false },
				{ answerText: 'wear', isCorrect: false },
				{ answerText: 'is wearing', isCorrect: true },
			],
		},
		{
			questionText: '	I think I..... a new calculator. This one does not work properly any more.',
			answerOptions: [
				{ answerText: 'needs', isCorrect: false},
				{ answerText: 'needed', isCorrect: false },
				{ answerText: 'need', isCorrect: true },
				{ answerText: 'am needling', isCorrect: false },
			],
		},
    	{
			questionText: 'Sorry, you can'+"t borrow my pencil. I.......it myself",
			answerOptions: [
				{ answerText: 'was using', isCorrect:false },
				{ answerText: 'using', isCorrect: false },
				{ answerText: 'use', isCorrect: false },
				{ answerText: 'am using', isCorrect: true},
			],
		},
    	{
			questionText: 'You can keep my iPod if you like. I...... it any more.',
			answerOptions: [
				{ answerText: 'don`t use', isCorrect: true },
				{ answerText: 'doesn`t use', isCorrect: false },
				{ answerText: 'didn`t use', isCorrect: false },
				{ answerText: 'am not using', isCorrect: false },
			],
		},
    	{
			questionText: 'Aristotle is known to have said something like this: .... man is a political animal is pretty obvious',
			answerOptions: [
				{ answerText: 'this', isCorrect: false },
				{ answerText: 'the', isCorrect: false },
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'that', isCorrect: true },
			],
		},
     	{
			questionText: '.....for what you call his "reckless courage", all lives would have been lost',
			answerOptions: [
				{ answerText: 'If it had been', isCorrect: false },
				{ answerText: 'It wouldn'+"t have been", isCorrect: false },
				{ answerText: 'Had it not been', isCorrect: true},
				{ answerText: 'If it were', isCorrect: false },
			],
		},
    	{
			questionText: '..... , he didn'+'t want to risk it for a third time. ',
			answerOptions: [
				{ answerText: 'Because he cannot fail again', isCorrect: false },
				{ answerText: 'Since the last time', isCorrect: false },
				{ answerText: 'Now that he has finally failed', isCorrect: false },
				{ answerText: 'Having failed twice already', isCorrect: true },
			],
		},
    	{
			questionText: '..... his principles, he has to be very careful.',
			answerOptions: [
				{ answerText: 'With regard of', isCorrect: false },
				{ answerText: 'With regard on', isCorrect: false },
				{ answerText: 'With regard to', isCorrect: true },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'The train ..... as fast as the bus.',
			answerOptions: [
				{ answerText: 'went', isCorrect: false },
				{ answerText: 'running', isCorrect: false },
				{ answerText: 'moves', isCorrect: true },
				{ answerText: 'going', isCorrect: false },
			],
		},
	];
	const [showScore, setShowScore] = useState(false);
	const[score,setscore]=useState(0);
  	const[currentQuestion, setCurrentQuestion]=useState(0);
  	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect==true){
  			setscore(score+1);
		}
    	const nextQuestion = currentQuestion + 1;
    	if (nextQuestion < questions.length) {
      		setCurrentQuestion(nextQuestion);
    	} else {
      		setShowScore(true);
    	}
  	};
  
	return (
		<div>
			<div className="game1intro">Fill in the blanks with the most appropriate form of the verbs.</div>
			<div className='game1content'>
				
				{showScore ? (
					<div className='score-section'>You scored {score} out of {questions.length}</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion+1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOptions)=><button className="game1btn"onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
							{answerOptions.answerText}
							</button>)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

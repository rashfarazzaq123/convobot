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
	const[bgColor,setbgColor]=useState(0);
  	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect==true){
			setscore(score+1);
			setbgColor("#2f922f");
		}
		else{
			setbgColor("#ff3333");
		}
    	const nextQuestion = currentQuestion + 1;
    	if (nextQuestion < questions.length) {
			setTimeout(function(){
				setCurrentQuestion(nextQuestion);
				setbgColor("#eceef7");
			},1000);
    	} else {
      		setShowScore(true);
    	}
  	};
  
	return (
		<div>
			<div className="game1intro" style={{color:"#1891c4",padding:"20px",fontSize:"60px",fontFamily:"Arial, Helvetica, sans-serif"}}>
				Hello! Welcome to Convo Grammar game  </div>
				<img src="13.jpg" width="1100px" height="450px" float="center"  style={{position:"absolute",top:"98%",left:"11%"}}/>
	<div className="box" style={{backgroundColor:"#1891c4"}}>
	<div className="introduction" >
		<h1 style={{color:"#1891c4",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"35px",position:"absolute",top:"171%",left:"44%"}}>How to play?</h1>
		<h2 style={{color:"#92a3ad",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"25px",position:"absolute",top:"183%",left:"6%"}}>Here are some grammar questions for you.First five questions are made with simple grammar and the last<br></br> five questions are there with more advance grammar  .</h2>
		<h3 style={{color:"#92a3ad",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"25px",position:"absolute",top:"194%",left:"6%"}}>If you click the correct answer the box will turn green  .If you select the wrong answer it turn red colour.</h3>	
		<h4 style={{color:"#92a3ad",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"25px",position:"absolute",top:"202%",left:"6%"}}>Finaly the game display your marks you got from here </h4>	
        <h5 style={{color:"#92a3ad",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"25px",position:"absolute",top:"208%",left:"44%"}}>Enjoy the game!</h5>
		</div>
	
		</div>
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
							{questions[currentQuestion].answerOptions.map((answerOptions)=><button style={{backgroundColor:bgColor}} className="game1btn"onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
							{answerOptions.answerText})
							</button>)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

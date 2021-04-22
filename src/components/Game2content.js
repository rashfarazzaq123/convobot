import React, { useState } from 'react';


export default function Game2() {
	const questions = [
		{
			questionText: 'Praise',
			answerOptions: [
				{ answerText: 'Something that you are trying to achieve.', isCorrect: false },
				{ answerText: 'To bend or move from a vertical position.', isCorrect: false },
				{ answerText: 'Words that show approval of or admiration for somebody/ something.', isCorrect: true },
				{ answerText: 'The situation in which something happens and that helps you to understand it.', isCorrect: false },
			],
		},
		{
			questionText: 'Forth',
			answerOptions: [
				{ answerText: "A word meaning 'your', used when talking to only one person.", isCorrect: false },
				{ answerText: 'To burst or make something burst loudly and violently, causing damage.', isCorrect: false },
				{ answerText: 'A town or city with a harbour, especially one where ships load and unload goods', isCorrect: false },
				{ answerText: 'Away from a place; out.', isCorrect: true },
			],
		},
		{
			questionText: '	Fella',
			answerOptions: [
				{ answerText: 'To succeed in doing or completing something.', isCorrect: false},
				{ answerText: 'An informal way of referring to a man.', isCorrect: true },
				{ answerText: 'According to what some people say.', isCorrect: false },
				{ answerText: 'To make short, light, regular repeated sounds to mark time passing.', isCorrect: false },
			],
		},
    {
			questionText: 'Smash',
			answerOptions: [
				{ answerText: 'To break something, or to be broken, violently and noisily into many pieces.', isCorrect:true },
				{ answerText: 'To turn round and round quickly; to make something do this.', isCorrect: false },
				{ answerText: 'A natural tendency for people and animals to behave in a particular way using the knowledge and abilities that they were born in with rather than thought or training.', isCorrect: false },
				{ answerText: 'To rub something against a surface.', isCorrect: false},
			],
		},
    {
			questionText: 'Trigger',
			answerOptions: [
				{ answerText: 'To decide or believe something as a result of what you have heard or seen.', isCorrect: false },
				{ answerText: 'To hit somebody/something quickly and lightly.', isCorrect: false },
				{ answerText: 'The part of a gun that you press in order to fire it.', isCorrect: true },
				{ answerText: 'To completely destroy a place or an area.', isCorrect: false },
			],
		},
    {
			questionText: 'Tend',
			answerOptions: [
				{ answerText: 'Angry, and behaving in a threatning way; ready to attack.', isCorrect: false },
				{ answerText: 'To be likely to do something or to happen in a particular way because this is what often or usually happens.', isCorrect: true },
				{ answerText: 'To walk up and down in a small area many times, especially because you are feeling nervous or angry.', isCorrect: false },
				{ answerText: 'A person with a very strong interest in a particular subject.', isCorrect: false },
			],
		},
     {
			questionText: 'Spin',
			answerOptions: [
				{ answerText: 'A person with a very strong interest in a particular subject.', isCorrect: false },
				{ answerText: 'To say or do something that makes somebody stop what they are saying or doing.', isCorrect: false },
				{ answerText: 'To turn round and round quickly; to make something do this.', isCorrect: true},
				{ answerText: 'Used to show that two teams or sides are against each other.', isCorrect: false },
			],
		},
    {
			questionText: 'Inspiration ',
			answerOptions: [
				{ answerText: 'The process that takes place when somebody sees or hears something that causes them to have exciting new ideas or makes them want to create something, especially in art, music or literature. ', isCorrect: true },
				{ answerText: 'To decide or belive something as a result of what you have heard or seen.', isCorrect: false },
				{ answerText: 'A promise to do something or behave in a particular way; a promise to support somebody/ something; the fact of committing yourself.', isCorrect: false },
				{ answerText: 'Being the total amount of something before anything is taken away.', isCorrect: false },
			],
		},
    {
			questionText: 'Delight',
			answerOptions: [
				{ answerText: 'A feeling of great pleasure.', isCorrect: true },
				{ answerText: 'Something that you are trying to achieve.', isCorrect: false },
				{ answerText: 'Extremely attractive or impressive.', isCorrect: false },
				{ answerText: 'To break open or apart, especially because of pressure from inside; to make something break in this way.', isCorrect: false },
			],
		},
		{
			questionText: 'Conquer',
			answerOptions: [
				{ answerText: 'A promise to do something or behave in a particular way; a promise to support somebody/ something; the fact of committing yourself.', isCorrect: false },
				{ answerText: 'To take control of a country or city and its people by force.', isCorrect: true },
				{ answerText: 'To show something clearly by giving proof or evidence.', isCorrect: false },
				{ answerText: 'A person who behaves violently towards people who belongs to a different race, or who treats them unfairly.', isCorrect: false },
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
				Hello! Welcome to convo Vocublarry game  </div>
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
		<div className='game1content' style={{color:"#02385c"}}>
				
				{showScore ? (
					<div className='score-section' style={{color:"#02385c"}}>You scored {score} out of {questions.length}</div>
				) : (
					<>
						<div className='question-section'style={{color:"#02385c"}}>
							<div className='question-count'style={{color:"#02385c"}}>
								<span style={{color:"#02385c"}}>Question {currentQuestion+1}</span>/{questions.length}
							</div>
							<div className='question-text'style={{color:"#02385c"}}>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'style={{color:"#02385c"}}>
							{questions[currentQuestion].answerOptions.map((answerOptions)=><button style={{backgroundColor:bgColor}} className="game1btn"onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
							{answerOptions.answerText}
							</button>)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}



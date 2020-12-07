import React, { useState } from 'react';

import './App.css'


const App = () => {

  const questions = [
		{
			questionText: 'How many people live in London?',
			answerOptions: [
				{ answerText: '2 654 768', isCorrect: false },
				{ answerText: '7 888 976', isCorrect: false },
				{ answerText: '8 961 989', isCorrect: true },
				{ answerText: '11 567 222', isCorrect: false },
			],
		},
		{
			questionText: 'Who is current president in Poland?',
			answerOptions: [
				{ answerText: 'Lech Walesa', isCorrect: false },
				{ answerText: 'Andrzej Duda', isCorrect: true },
				{ answerText: 'Aleksander Kwasniewski', isCorrect: false },
				{ answerText: 'Wiktor Juszczenka', isCorrect: false },
			],
		},
			{
				questionText: 'How many states in America ?',
				answerOptions: [
					{ answerText: '50', isCorrect: true },
					{ answerText: '51', isCorrect: false },
					{ answerText: '57', isCorrect: false },
					{ answerText: '53', isCorrect: false },
				],
			},
			{
				questionText: 'Who has created Microsoft?',
				answerOptions: [
					{ answerText: 'Mark Zuckenberg', isCorrect: false },
					{ answerText: 'Donald Trump', isCorrect: false },
					{ answerText: 'Elon Mask', isCorrect: false },
					{ answerText: 'Bill Gates', isCorrect: true },
				],
			}
		
    
  ]
  
const [currentQuestion, setCurrentQuestion] = useState(0);
const [countPoint, setCountPoint] = useState(0)
const [currentAnswer, setCurrentAnswer] = useState(0)
const [showScore, setShowScore] = useState(false)

///////////////////////////////////////////////
const handleClick = (isCorrect) => {
  if(isCorrect === true ) {
	  setCountPoint(countPoint + 1)
	console.log(countPoint)
	 }

	const nextAnswer = currentAnswer + 1
	 if(nextAnswer < questions.length) {
	 setCurrentAnswer(nextAnswer) 
	 } else {
		 setShowScore(true)
	 }

    const nextQuestion =  currentQuestion + 1
    if (nextQuestion < questions.length)
		setCurrentQuestion(nextQuestion);
	
  
   
		}
    
  


// const pytania = questions.map(pytanie => (
//   <p>{pytanie.questionText}</p> ) )
  
  return (
	  <React.Fragment>
		  <div className="wrap">
			
		  {showScore ? ( <div className="score" ><h2>Your correct answers {countPoint} / {questions.length}</h2></div> )
		  : 
  		<div>

		<div className="section">
  		<h1 className="question" >Question: <span>{currentQuestion + 1}/4</span></h1> 
		<h3 className="textQuestion">{questions.map(pytanie => (
  		<span>{pytanie.questionText}</span>))[currentQuestion]}</h3> 
		</div>  


		<div className="buttons">
    	{questions[currentAnswer].answerOptions.map((odpowiedz) => (
		<button onClick={() => handleClick(odpowiedz.isCorrect)}  >{odpowiedz.answerText} </button>
		)) }
  		{/* <h1>{countPoint === 4 ? <span>brawo ty</span>  : null}</h1> */}
		  </div>
	
  	</div>
	}
	</div>
  </React.Fragment>
  )
}

export default App;
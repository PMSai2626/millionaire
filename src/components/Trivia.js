import React,{useEffect, useState} from 'react'

import useSound from "use-sound";
import play1 from "./play.mp3";
import canswer from "./correctanswer.mp3";
import wanswer from "./wronganswer.mp3";


const Trivia = ({data,setStop,questionNumber,setQuestionNumber, setEarned}) => {


const [question,setQuestion] = useState(null);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [className,setClassName] = useState("answer");
const[letsPlay] = useSound(play1)
const[correctanswer] = useSound(canswer)
const[wronganswer] = useSound(wanswer)



useEffect(()=>{
  letsPlay();
}, [letsPlay]);

useEffect(() =>{
  setQuestion(data[questionNumber-1]);
}, [data, questionNumber]);

const delay = (duration, callback)=>{
  setTimeout(()=>{
    callback();

  }, duration);
}


const handleClick = (a) =>{
  setSelectedAnswer(a);
  setClassName("answer active");
  delay(3000, ()=> 
  setClassName(a.correct ? "answer correct":"answer wrong")
  );
  delay(5000, ()=>{
    if(a.correct){
            correctanswer();
            delay(1000, ()=>{
              if (questionNumber === data.length) {
                // Last question answered correctly
                setStop(true); // End the quiz
                setEarned("₹ 1,00,00,000"); // Update earned amount
                
              }
              else {
                // Proceed to the next question
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);

              }
            })
    
  } else{
    wronganswer();
    delay(1000, () =>{
      setStop(true);
    })
    
  }
  })
     
  };



  return (
    <div className='trivia'>
        <div className='question'> {question?.question}</div>
        <div className='answers'>
          {question?.answers.map((a)=>(
            <div  className={selectedAnswer === a ? className:"answer"} onClick={() => handleClick(a)}>{a.text}</div>
          ))}
            
            
        </div>
      
    </div>
  )
}

export default Trivia

import React, { useEffect, useMemo, useState } from 'react'
import "./App.css";
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';


const App = () => {
  const [username, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned,setEarned] = useState("₹ 0")

  const data = [{
    id:1,
    question:"Which of the following is used in React.js to increase performance?",
    answers:[
      {
        text:"Virtual DOM",
        correct:true,
    },
    
      {
        text:"Original DOM",
        correct:false,
    },
    
      {
        text:"Bth a and b",
        correct:false,
    },

    {
      text:"None of the Above",
      correct:false,
    },
  ],
},
  {
    id:2,
    question:"What is ReactJS?",
    answers:[
      {
        text:"Server-side framework",
        correct:false,
      },

      {
        text:"user interface framework",
        correct:true,
      },
      {
        text:"both a and b",
        correct:false,
      },
      {
        text:"None of the above",
        correct:false,
      },
    ],
  },

  {
    id:3,
    question:"Who created React.js?",
    answers:[
      {
        text:"Tim Lee",
        correct:false,
      },

      {
        text:"jordan Mike",
        correct:false,
      },
      {
        text:"jordan Walke",
        correct:true,
      },
      {
        text:"Jordan Lee",
        correct:false,
      },
    ],
  },

  {
    id:4,
    question:"In which language is React.js written?",
    answers:[
      {
        text:"Python",
        correct:false,
      },

      {
        text:"Javascript",
        correct:true,
      },
      {
        text:"java",
        correct:false,
      },
      {
        text:"PHP",
        correct:false,
      },
    ],
  },

  {
    id:5,
    question:"Which of the following port is the default where webpack-dev-server runs?",
    answers:[
      {
        text:"3000",
        correct:false,
      },

      {
        text:"3306",
        correct:false,
      },
      {
        text:"3030",
        correct:false,
      },
      {
        text:"8080",
        correct:true,
      },
    ],
  },


  {
    id:6,
    question:"How many elements can a valid react component return?",
    answers:[
      {
        text:"1",
        correct:true,
      },

      {
        text:"2",
        correct:false,
      },
      {
        text:"3",
        correct:false,
      },
      {
        text:"4",
        correct:false,
      },
    ],
  },

]

  const moneyPyramid = useMemo(()=>
  [ 
    { id:1, amount: "₹ 1,000" },
    { id:2, amount: "₹ 2,000" },
    { id:3, amount: "₹ 3,000" },
    { id:4, amount: "₹ 5,000" },
    { id:5, amount: "₹ 10,000" },
    { id:6, amount: "₹ 20,000" },
    { id:7, amount: "₹ 40,000" },
    { id:8, amount: "₹ 80,000" },
    { id:9, amount: "₹ 1,60,000" },
    { id:10, amount: "₹ 3,20,000" },
    { id:11, amount: "₹ 6,40,000" },
    { id:12, amount: "₹ 12,50,000" },
    { id:13, amount: "₹ 25,00,000" },
    { id:14, amount: "₹ 50,00,000" },
    { id:15, amount: "₹ 1,00,00,000" },

  ].reverse(),[]
  );
    

  useEffect(() =>{
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount);
  }, [moneyPyramid, questionNumber] )



  return (
    <div className='app'>
      <>
      
      </>
      {username ? (

        <>
        <div className ="main">
        {stop ? <h1 className='endText'>You earned: {earned}</h1> : (
<>
        
        <div className='top'>
          <div className='timer'>
            <Timer  setStop={setStop} questionNumber={questionNumber} />
            </div>
          </div>
          <div className='bottom'>
            <Trivia data = {data} 
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}/>
            </div>
            </>
)}
      </div>
      <div className='pyramid'>
      <ul className='moneylist'>
        {moneyPyramid.map((m) => (
          <li className= {questionNumber === m.id ? 'moneyListitem active': "moneyListitem"}>
          <span className='mnumber'>{m.id}</span>
          <span className='mamount'>{m.amount}</span>
          </li>
        ))}
        
          
      </ul>
      </div>
        </>
      ) : <Start setUserName={setUserName}/>}
      
    </div>
  )
}

export default App

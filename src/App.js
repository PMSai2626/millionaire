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

  {
    id:7,
    question:"What is JSX in React? ",
    answers:[
      {
        text:" A styling language ",
        correct:false,
      },

      {
        text:"A templating engine",
        correct:false,
      },
      {
        text:" A syntax extension for JavaScript ",
        correct:true,
      },
      {
        text:" A state management library ",
        correct:false,
      },
    ],
  },

  {
    id:8,
    question:"What is the purpose of the useState hook in React?",
    answers:[
      {
        text:"Managing component state in functional components ",
        correct:true,
      },

      {
        text:"Fetching data from an API ",
        correct:false,
      },
      {
        text:" Defining global variables  ",
        correct:false,
      },
      {
        text:" Creating event listeners  ",
        correct:false,
      },
    ],
  },

  {
    id:9,
    question:"In React, what does the term 'props' stand for? ",
    answers:[
      {
        text:" Properties  ",
        correct:true,
      },

      {
        text:"Procedures",
        correct:false,
      },
      {
        text:" Prototypes",
        correct:false,
      },
      {
        text:" Parameters ",
        correct:false,
      },
    ],
  },

  {
    id:10,
    question:"What is the purpose of the useEffect hook in React?  ",
    answers:[
      {
        text:"  Managing component state  ",
        correct:false,
      },

      {
        text:"Performing side effects in functional components ",
        correct:true,
      },
      {
        text:"Handling HTTP requests  ",
        correct:false,
      },
      {
        text:"  Controlling rendering logic  ",
        correct:false,
      },
    ],
  },

  {
    id:11,
    question:"What is Redux used for in a React application? ",
    answers:[
      {
        text:"Styling and theming  ",
        correct:false,
      },

      {
        text:"Managing component state ",
        correct:false,
      },
      {
        text:" Handling asynchronous operations ",
        correct:false,
      },
      {
        text:" State management in a predictable way  ",
        correct:true,
      },
    ],
  },

  {
    id:12,
    question:"How is data passed between React components?  ",
    answers:[
      {
        text:" Using global variables  ",
        correct:false,
      },

      {
        text:"Through function parameters ",
        correct:false,
      },
      {
        text:" Via HTTP requests  ",
        correct:false,
      },
      {
        text:" Using props  ",
        correct:true,
      },
    ],
  },

  {
    id:13,
    question:"What is the purpose of React Components? ",
    answers:[
      {
        text:"Managing database connections ",
        correct:false,
      },

      {
        text:"Handling server-side logic ",
        correct:false,
      },
      {
        text:" Building user interfaces into reusable pieces  ",
        correct:true,
      },
      {
        text:" Controlling browser settings  ",
        correct:false,
      },
    ],
  },

  {
    id:14,
    question:"What is the significance of the React.Fragment in React?  ",
    answers:[
      {
        text:"A state management library ",
        correct:false,
      },

      {
        text:"A wrapper for functional components ",
        correct:false,
      },
      {
        text:" A placeholder for async operations  ",
        correct:false,
      },
      {
        text:"A wrapper to group multiple elements without adding an extra node to the DOM ",
        correct:true,
      },
    ],
  },

  {
    id:15,
    question:"What tool does React use to compile JSX? ",
    answers:[
      {
        text:" ReactDOM  ",
        correct:false,
      },

      {
        text:"JSX Compiler",
        correct:false,
      },
      {
        text:"React Router ",
        correct:false,
      },
      {
        text:"Babel  ",
        correct:true,
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
            setQuestionNumber={setQuestionNumber}
            setEarned = {setEarned}/>
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

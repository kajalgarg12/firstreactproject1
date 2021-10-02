import React,{useState} from 'react'
import './App.css';

function App() {
  const [number1,setNumber1]=useState();
  const number2 =20;
  const [result, setResult] = useState()
  
     function add() {
       setResult(number1+number2);
 }
 function sub(){
   setResult(number1-number2);
 }
  return (
    <div className="App">
     <div>
           <h1>CALCULATOR</h1><br/>
           <input type ="Number" value={number1} onChange={e=> setNumber1(+e.target.value)}/><br/>

            <div className="buttons">
           <button id="button1" onClick={add}>ADD</button><br/>
           <button id="button2"  onClick={sub}>SUBTRACT</button>
           </div>
           <br/>
           <h1>RESULT: {result}</h1>
      
        </div>   
    </div>
  );
}

export default App;

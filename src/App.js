import React,{useState} from 'react';

export default function App(){
const [NumOne, setNumOne] = useState("");
  const [NumTwo, setNumTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (number) => {
    return !operator
      ?setNumOne(NumOne + number)
      :setNumTwo(NumTwo + number);
  };
  const handleOperator = (operator) => {
    return setOperator(operator);
  };
  
  const handleCalculate = () => {
    const parseOneNum = parseInt(NumOne);
    const parseTwoNum = parseInt(NumTwo);

    if (operator === "+") {
      setResult(parseOneNum + parseTwoNum);
    } else if (operator === "-") {
       setResult(parseOneNum - parseTwoNum);
    } else if (operator === "*") {
      setResult(parseOneNum * parseTwoNum);
    }  else if (operator === "/") {
      setResult(parseOneNum / parseTwoNum);
    } else {
      setResult(parseOneNum + parseTwoNum / 10);
    }
  };

  const display = !NumTwo
    ? NumOne|| result
    : result || NumTwo;

  return (
    <div>
      <h1>Calculator</h1>
      <p>{display}</p>
      <div>
        <button onClick={() => handleInput ("1")}>1</button>
        <button onClick={() => handleInput ("2")}>2</button>
        <button onClick={() => handleInput ("3")}>3</button>
        <button onClick={() => handleInput ("4")}>4</button>
        <button onClick={() => handleInput ("5")}>5</button>
        <button onClick={() => handleInput ("6")}>6</button>
        <button onClick={() => handleInput ("7")}>7</button>
        <button onClick={() => handleInput ("8")}>8</button>
        <button onClick={() => handleInput ("9")}>9</button>
        <button onClick={() => handleInput ("0")}>0</button>
        <br></br>
      <button onClick={() => handleOperator ("+")}>+</button>
      <button onClick={() => handleOperator ("-")}>-</button>
        <button onClick={() => handleOperator ("*")}>*</button>
        <button onClick={() => handleOperator ("/")}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

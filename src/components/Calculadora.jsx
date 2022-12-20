import React, { useState } from "react";
import "./Calculadora.css";

export default function Calculadora() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function showNumber(e) {
        var input = e.target.value;
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentagem() {
        setNum(num / 100);
    }

    function showOperator(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function showResult() {
        if (operator === "/") {
            setNum(parseFloat(oldnum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operator === "-") {
            console.log(oldnum)
            console.log(num)
            console.log(oldnum - num)
            setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operator === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }


    return (
    <section className="App-header" >
        <div id="Principal">
            <div id="Calculadora">
                <h1 className="result">{num}</h1>
                <div id="teclado" className='buttons'>
                    <button className="button" onClick={clear}>C</button>
                    <button className="button" onClick={showNumber}  value="()">()</button>
                    <button className="button" onClick={porcentagem} value="%">%</button>
                    <button className="button" onClick={showOperator} value="/">/</button><br></br>

                    <button className="button" onClick={showNumber} value={7}>7</button>
                    <button className="button" onClick={showNumber} value={8}>8</button>
                    <button className="button" onClick={showNumber} value={9}>9</button>

                    <button class="button" onClick={showOperator} value="*">*</button><br></br>

                    <button className="button" onClick={showNumber} value={4}>4</button>
                    <button className="button" onClick={showNumber} value={5}>5</button>
                    <button className="button" onClick={showNumber} value={6}>6</button>

                    <button class="button" onclick={showOperator} value={"-"}>-</button><br></br>

                    <button className="button" onClick={showNumber} value={1}>1</button>
                    <button className="button" onClick={showNumber} value={2}>2</button>
                    <button className="button" onClick={showNumber} value={3}>3</button>

                    <button className="button" onClick={showOperator} value="+">+</button><br></br>

                    <button class="button" onclick={showNumber} value={"."}>.</button>
                    <button class="button" onClick={showNumber} value={0}>0</button>
                    <button class="button" onclick={showNumber} value={","}>,</button>
                    <button class="button" onClick={showResult}>=</button>
                </div>
            </div>
        </div>
 </section>
    )
}
import React, { useState } from 'react';
import "./Cofre.css";

export default function Cofre() {
  const [num, setNum] = useState(0);

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

    function showResult(){
        if(num == 1234){
            setNum("aberto")
        }else{
           setNum("fechado")
        }
    }


  return (
    <section className="App-header" >
        <div id="Principal">
            <div id="Calculadora">
                <h1 className="result">{num}</h1>
                <div id="teclado" className='buttons'>
                            
                            <br></br>
                    <button className="button" onClick={showNumber} value={1}>1</button>
                    <button className="button" onClick={showNumber} value={2}>2</button>
                    <button className="button" onClick={showNumber} value={3}>3</button>
                    

                            <br></br>

                    <button className="button" onClick={showNumber} value={4}>4</button>
                    <button className="button" onClick={showNumber} value={5}>5</button>
                    <button className="button" onClick={showNumber} value={6}>6</button>

                            <br></br>

                    <button className="button" onClick={showNumber} value={7}>7</button>
                    <button className="button" onClick={showNumber} value={8}>8</button>
                    <button className="button" onClick={showNumber} value={9}>9</button>

                             <br></br>

                    <button class="button" onClick={clear}>C</button>
                    <button class="button" onClick={showNumber} value={0}>0</button>
                    <button class="button"  onClick={showResult}>🔑</button>
                </div>
            </div>
        </div>
 </section>
  )
}

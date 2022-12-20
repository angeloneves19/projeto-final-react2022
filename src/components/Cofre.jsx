import React from 'react'
import "./Cofre.css";

export default function Cofre() {
  return (
    <section className="App-header" >
        <div id="Principal">
            <div id="Calculadora">
                <h1 className="result"></h1>
                <div id="teclado" className='buttons'>
                    <button className="button" >C</button>
                    <button className="button" >()</button>
                    <button className="button" >%</button>
                    <button className="button" >/</button><br></br>

                    <button className="button" >7</button>
                    <button className="button" >8</button>
                    <button className="button" >9</button>

                    <button class="button" >*</button><br></br>

                    <button className="button" >4</button>
                    <button className="button" >5</button>
                    <button className="button" >6</button>

                    <button class="button" >-</button><br></br>

                    <button className="button" >1</button>
                    <button className="button" >2</button>
                    <button className="button" >3</button>

                    <button className="button" >+</button><br></br>

                    <button class="button" >.</button>
                    <button class="button" >0</button>
                    <button class="button" >,</button>
                    <button class="button" >=</button>
                </div>
            </div>
        </div>
 </section>
  )
}

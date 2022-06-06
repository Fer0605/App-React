import React from 'react';

export default function Suma() {

  const [input, setInput] = React.useState({
    N1: "",
    N2: "",
  });
  
  const [result, setResult] = React.useState();


  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };


  const Suma = function () {
    setResult((+input.N1) + (+input.N2));
  };


   const Multiplicar = function () {
    setResult((+input.N1) * (+input.N2));
  };
  return (

    <div>
        <div className='SumaMultiplicar' >

            <div>
                <h2> Operations</h2>
                <div>
                    <input
                     onChange={handleInput}
                    name="N1"
                    value={input.N1}
                    type="text"
                    ></input>
                    <input
                    onChange={handleInput}
                    name="N2"
                    value={input.N2}
                    type="text"
                    ></input>
                </div>
            </div>
            <h3>Opcions</h3>
            <div>
                <button onClick={Suma}>Suma</button>
                <button onClick={Multiplicar}>Multiplicación</button>
            </div>
            <div> 
                <h4> R= <span> {result} </span> </h4> 
            </div>
            
        </div>
    </div>
  );
        
      

}
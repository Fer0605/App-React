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


  const Celsius = function () {
    setResult(((+input.N1)-32) * 0.5556+'C');
  };


   const Fahrenheit = function () {
    setResult(((+input.N1)*1.8) +32 +'F');
  };
  return (

    <div>
        <div className='Temp'>

            <div>
                <h2>Temperature</h2>
                <div>
                    <input
                     onChange={handleInput}
                    name="N1"
                    value={input.N1}
                    type="text"
                    ></input>
                </div>
                
            </div>
            <h3>Opcions</h3>
            <div>
                <button onClick={Celsius}>Celsius</button>
                <button onClick={Fahrenheit}>Fahrenheit</button>
            </div>
            <div> 
                <h4>R= <span> {result} </span> </h4> 
            </div>
            
        </div>
    </div>
    
  );
        

}
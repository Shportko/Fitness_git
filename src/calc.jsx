
import {useState} from 'react';


function zz() {
  const [number1, setNumber1] = useState(2);
  const [number2, setNumber2] = useState(7);


  const changeNumber1 = (e) => {
    setNumber1(+e.target.value);
  };

  const changeNumber2 = (e) => {
    setNumber2(+e.target.value);
  };

const changeOperation = (e) => {

  const operation = e.target.value;
}
  
  return (
    <div> 
    <input value={number1} onChange={changeNumber1} />
    <select onChange={changeOperation}>
      <option value='+'>+</option>
      <option value='-'>-</option>
      <option value='*'>*</option>
      <option value='/'>/</option>
    </select>

    <input value={number2} onChange={changeNumber2} />
    <h1>{number1}+{number2}= {number1+number2}</h1>
    <Hero />
    <Homecard />
    </div>
  );
}

export default zz;









/*import { useState } from 'react';



function Button (props)
{ 
    const initialCounters = [{
        id:33,
        value:0
      },
      {
        id:44,
        value:5
      },
      {
        id:32,
        value:9
      }];

const [counts, setCounts] = useState(initialCounters);

  const plus = (id) => {

    const updatedCounts = counts.map(el => el.id === id 
      ? {...el, value: el.value + 1} 
      : el
    );

    setCounts(updatedCounts);
  };
  const minus = (id) => { 
   
    const updatesCount = counts.map(el => el.id === id
      ? {...el, value: el.value + 1}
      : el
      );
      setCounts(updatesCount);
  };
  const addCounter = () => {
    const newCount = {
      id: Math.random(),
      value: 0,
    };

    setCounts([...counts, newCount] );
  };
  const deleteCounter = () => {
    const deleteCount = {
      
    };

    setCounts([...counts,] );
  };


  return (
    <div> 
        <ul>
            {counts.map(el => (
            <li key="el.id">
                <button onClick = {() => plus (el.id)}>PLUS</button>
                {el.value}
                <button onClick = {() => minus (el.id)}>MINUS</button> 
                <button onClick = {deleteCounter}>DELETE</button> 
            </li>
            ))}
        </ul>
    <button onClick = {addCounter}>Add counter</button>    
    </div>
  );
}

export default Buttonplusminus; */
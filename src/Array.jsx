
/*function Array () {
    
    const names = [ 
        'Alice',
        'Bob'    
    ];

    return (
      <div>
        {names[0]},
        {names[1]}
      </div>
    );
}8/

export default Array; 

/*
{
            id:676767,
            title:Yura,
            phone:743789437,
        },
        {
            id:7657486,
            title:Kate,
            phone:8957474,
        }


         { name.map (el => <li key = {el.id}> {el.title} </li>) }
        */

         /*function Array () {
    
            const names = [ 
                'Alice',
                'Bob'    
            ];
            
            const list = [];
                for (let i=0; i < names.length; i++)
                {list.push(<li>{names[i]}</li>)}
        

            return (
              <div>
                <ul>
                {list}
                </ul>
              </div>
            );
        }
        
        export default Array; */

        /*function Array () {
    
            const names = [
                 {
                    id:'676767',
                    title:'Yura',
                    phone:'743789437',
                },
                {
                    id:'7657486',
                    title:'Kate',
                    phone:'8957474',
                },
                {
                    id:'76574846',
                    title:'Hhh',
                    phone:'8957474',
                }
            ];
        

            return (
              <div>
                <table><tr>
                {names.map(el => <td key={el}> {el.title}:{el.phone} </td>)}
                </tr></table>
              </div>
            );
        }
        
        export default Array; */


        /*function Array () {
    
            const heloClick =() => {
                console.log('Hello')
            }
        

            return (
              <div>
                <button onClick = {heloClick}> </button>
              </div>
            );
        }
        
        export default Array; */

        function Array () {
    
            const onChangeName = (event) => {
                console.log(event.target.value);
            }
        

            return (
              <div>
                <input onChange={onChangeName}/>
              </div>
            );
        }
        
        export default Array; 

        
        
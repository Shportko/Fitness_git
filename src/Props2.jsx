

function Props2(props)
{


    return (
        <div>
            <ul>
                {props.cours.map(el => (
                <li key = {el.id}>
                    {el.name}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Props2;
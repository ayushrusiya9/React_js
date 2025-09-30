
const App = ()=>{
    let Fruits = [
        {id:1,'name':'ayush','age':20},
        {id:2,'name':'rahul','age':21},
        {id:3,'name':'rohit','age':22},
        {id:4,'name':'sachin','age':23},
        {id:5,'name':'Sidharth','age':22},
    ];

    return(
        <>
            <h1>Mapping Items</h1>

            {/* <ul>
                {Fruits.map((e, index)=>(
                    <li key={index}>{e}</li>
                ))
                }
            </ul> */}
            <ul>
                {Fruits.map((e)=>(
                    <li key={e.id}>Name {e.name} age {e.age}.</li>
                ))
                }
            </ul>
        </>
    )
}

export default App;
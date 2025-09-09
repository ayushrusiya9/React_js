// this is card 
import "./Props.css"

const App = ({img,title,pera,btn}) => {
    return(
        <>
        <div className="card">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{pera}</p>
            <button>{btn}</button>
        </div>
        </>
    )
}

export default App;
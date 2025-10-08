import { useNavigate } from "react-router-dom"

const Rcontact  = () =>{

  let Navigate = useNavigate()

    return (
      <div>
        <button onClick={()=>{Navigate('/about')}}>go to about page</button>
        <h1>Rcontact</h1>
      </div>
    )

}

export default Rcontact

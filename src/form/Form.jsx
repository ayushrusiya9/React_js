import { useState } from "react";

const App = ()=>{
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [contact,setcontact] = useState("")
    const [password,setpassword] = useState("")
    // const change = (e)=>{
    //     console.log(e.target.value);
    //     setval(e.target.value)
    // }

    let handlePrevent = (e)=>{
        e.preventDefault();
        alert("Form submitted");
    }
    return (
        <>
            <h1>Form</h1>   
            <form onSubmit={handlePrevent}>
                Name :<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> <br />
                <h1>{name}</h1>

                Email : <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /> <br /> <br />
                <h1>{email}</h1>

                Contact : <input type="text" value={contact} onChange={(e)=>{setcontact(e.target.value)}} /> <br />  <br />
                <h1>{contact}</h1>

                Password : <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} /> <br /> <br />
                <h1>{password}</h1>

                <button type="submit">submit</button>
            </form>
        </>
    )

}

export default App

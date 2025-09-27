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

    let [errname,seterrname] = useState("")
    let handlePrevent = (e)=>{
        e.preventDefault();
        if(name== ""){
            seterrname("name is required")
        }
        else{
            alert("Form submitted");
        }
    }

    const [formData,setformdata] = useState({
        name:"",
        email:"",
        contact:"",
        password:""
    }) 

    let changeInp=(e)=>{
        setformdata({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    return (
        <>
            <h1>Form</h1>   
            <form onSubmit={handlePrevent}>
                Name :<input type="text" name="name" value={formData.name} onChange={changeInp} /> <br /> <br />
                <h1>{formData.name}</h1>
                <h2>{errname}</h2>  33
                Email : <input type="text" name="email" value={formData.email} onChange={changeInp}/> <br /> <br />
                <h1>{formData.email}</h1>

                Contact : <input type="text" name="contact" value={formData.contact} onChange={changeInp} /> <br />  <br />
                <h1>{formData.contact}</h1>

                Password : <input type="text" name="password" value={formData.password} onChange={changeInp} /> <br /> <br />
                <h1>{formData.password}</h1>

                <button type="submit">submit</button>
            </form>
        </>
    )

}

export default App

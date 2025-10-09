import React, { useEffect } from 'react'
import Axios from 'axios'
import axios from 'axios'
const CRUD = () => {

    useEffect(()=>{
        axios.get('http://localhost:3000/Hotel').then( (res)=> {
            console.log(res)
            console.log(res.data)

        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <>
        <h1>Show data........</h1>
    </>
  )
}

export default CRUD

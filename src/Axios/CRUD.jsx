import React, { useEffect } from 'react'
import Axios from 'axios'
import axios from 'axios'
import { data } from 'react-router-dom'
const CRUD = () => {
    let [Data, setData] = React.useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/Hotel').then( (res)=> {
            console.log(res)
            console.log(res.data)
            setData(res.data)

        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <>
        <h1>Show data........</h1>
        <div>
            {
                Data.map((e)=>(
                    <h2>{e.name}</h2>
                ))
            }

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age </th>
                        <th>City</th>
                        <th>CheckIN</th>
                        <th>CheckOut</th>
                        <th>price</th>
                        <th>people</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            Data.map((e)=>(
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>{e.city}</td>
                                    <td>{e.checkIn}</td>    
                                    <td>{e.checkOut}</td>
                                    <td>{e.price}</td>
                                    <td>{e.people}</td>
                                    <td>{e.total}</td>
                                </tr>
                            ))
                        }
                    
                </tbody>
            </table>
        </div>
    </>
  )
}

export default CRUD

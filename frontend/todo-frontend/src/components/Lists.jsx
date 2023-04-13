import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
const Lists = () => {
    const [todolists,setToDoLists] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/')
                .then(res => {setToDoLists(res.data)})
                .catch(err => {console.log(err)})
    })
    
  return (
    <div>
        {
            todolists.map((item,index)=>(
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))   
        }
    </div>
  )
}

export default Lists
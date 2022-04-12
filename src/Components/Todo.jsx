import { useState ,useEffect } from "react"
import axios from "axios";

export const Todo = ()=>{
    const [text,setText] = useState("");
    const [data,setData] = useState([])
    useEffect(()=>{
        getData()
    },[data])
    const getData =()=>{
        axios.get("http://localhost:8080/todos").then((res)=>{setData(res.data)})
    }
    return(
        <div>
            {data.map((e)=>{
                return(
                    <h1>{e.text}</h1>
                )
            })}
            <input value={text} onChange={(e)=>{
                setText(e.target.value)
            }} style={{'height':'40px','width':'60%','borderRadius':'10px','border':'none','padding':'5px'}} type="text" placeholder="Write Something"/>
            <button onClick={()=>{
                let userData = {
                    text,circle:'red'
                }
                axios.post("http://localhost:8080/todos",userData).then((res)=>{getData
                console.log("added")
            })
            }} style={{'height':'48px','width':'10%','borderRadius':'10px','border':'none','marginLeft':'10px','background':'white'}}>+</button>
        </div>
    )
}
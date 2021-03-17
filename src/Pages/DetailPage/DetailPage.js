import { useEffect, useState } from "react";




export default function DetailPage({match}) {

    const [ post, setPost ] = useState({})
    const baseURL ='https://jsonplaceholder.typicode.com/todos';

    const numbers = [1,3,4];
    numbers[10] = 11
    console.log(numbers.indexOf(20))
      useEffect(()=>{
        fetch(`${baseURL}/${match.params.id}`)
          .then( res => res.json())
          .then(data =>{
            console.log(data)
            setPost(data)
          })
      },[match])
      

    return (
        <div>
            <h1>{post.userId}</h1>
            <h1>{post.title}</h1>
        </div>
    )
}


// 
// 
//      get         -      set
// 
//     value        -     setValue
//                        setValue(40)
// 
//     value = 40
// 
//      clg(value)
// 
// 
// 
// 
// 
// 
// 
// 

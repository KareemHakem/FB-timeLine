import { useEffect, useState } from "react"

const baseURL ='https://jsonplaceholder.typicode.com/todos';


export default function HomePage({history}) {
  const [ posts, setPosts ] = useState([])

    useEffect(()=>{
      fetch(baseURL)
        .then( res => res.json())
        .then(data =>{
          console.log(data)
          setPosts(data)
        })
    },[])

   
    
    return (
      <div  className='flex_col'>
          {posts?.map(post =>(
            <div key={post.id}  style={{border: '1px solid green', padding:30, margin: 30 }} onClick={()=> history.push(`/home/${post.id}`)} >
              <h1>{post.title}</h1>
              <p>{post.completed}</p>

            </div>
          ))}
      </div>
    );
}

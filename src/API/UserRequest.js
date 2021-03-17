import axios from 'axios';


export const getUsers = async (token) =>{

    const conig = {
        "content-type" : "application.json",
        "Authorization" : `Bearer ${token}`
    }

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', conig) ;
    return data;
    
    
}
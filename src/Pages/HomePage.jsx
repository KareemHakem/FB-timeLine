import React from 'react'
import Post from '../Components/Post'
import Contacts from '../Components/Contacts'
import Sidebar from '../Components/Sidebar'

export default function HomePage() {
    return (
        <div className='flex'>
            <Sidebar />  
            <Post />
            <Contacts />`
        </div>
    )
}

import './StyleContactRow.css'

import { Avatar } from '@material-ui/core'



export default function ContactRow({src, name}) {
    return (
        <div className='contact_row flex_align'>
           <Avatar src ={src}  style={{marginRight: 10}} />
           <p className='avatar_text'>{name}</p>    
        </div>
    )
}



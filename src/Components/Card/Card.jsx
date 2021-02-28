
import ContactRow from '../ContactRow/ContactRow'  // Level  1- functions - 2- hooks  3- Built-in components - 4- built-out components  5- style.css

import {Card, IconButton} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ReplyIcon from '@material-ui/icons/Reply';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


import './StyleCard.css'



export default function Cards({src, name, desc, photo }) {
return (
    <Card className='card' >
        <div className='card_top flex_between'>
            <ContactRow src={src} name={name} />
            <IconButton > <MoreHorizIcon /></IconButton>
        </div>
        <p className='desc'>{desc}</p>
        <img className='image_card' src={photo} alt='$$$' />
        <div className='like_section flex_evenly'>
            <button className='flex_center section'>
                <ThumbUpAltIcon />
                <p>like</p>
            </button>
            <button className='flex_center section'>
                <ChatBubbleOutlineIcon />
                <p>comments</p>
            </button>
            <button className='flex_center section'>
                <ReplyIcon />
                <p>Share</p>
            </button>
        </div>

    </Card>
    )
}

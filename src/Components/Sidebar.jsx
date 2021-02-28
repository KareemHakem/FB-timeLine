import Row from './Row/Row'

import FlagIcon from '@material-ui/icons/Flag';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventIcon from '@material-ui/icons/Event';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import './StyleSidebar.css'


export default function Sidebar() {

    return (
        <div className='side'>
            <div style={{position:'fixed'}}>
                {rows.map(row =>(
                    <Row key={row.id} Icon={row.icon} title={row.name}    />
                ))}
            </div>
        </div>
    )
}



const rows =[
    {
        id: '1',
        icon : FlagIcon,
        name : 'Pages'
    },
    {
        id: '2',
        icon : InfoIcon,
        name : 'Covid 19 Information Center'
    },
    {
        id: '3',
        icon : GroupIcon,
        name : 'Friends'
    },
    {
        id: '4',
        icon : BookmarkBorderIcon,
        name : 'Saved'
    },
    {
        id: '5',
        icon : GroupWorkIcon,
        name : 'Groups'
    },
    {
        id: '6',
        icon : OndemandVideoIcon,
        name : 'Watches'
    },
    {
        id: '7',
        icon : EventIcon,
        name : 'Events'
    },
    {
        id: '8',
        icon : WatchLaterIcon,
        name : 'Memories'
    },
    {
        id: '9',
        icon : ArrowDropDownCircleIcon,
        name : 'More'
    },
]  // list
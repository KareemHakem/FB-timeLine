import './StyleContacts.css'
import ContactRow from './ContactRow/ContactRow'

export default function Contacts() {
    return (
        <div className='contacts'> 
            <div style={{ position: 'fixed'}}>
                <h1>Contact Bar</h1>
                <p> I am not gonna remove the contact Bar and You can kiss my ass</p>
                { users.map(user =>(
                    <ContactRow key={user.id} name={user.name} src={user.src} />
                ))}
            </div>
        </div>
    )
}


const users = [ 
    {
        id :'1',
        src : 'https://randomuser.me/api/portraits/women/29.jpg',
        name: 'Maria'
    },
    {
        id :'2',
        src : 'https://randomuser.me/api/portraits/women/28.jpg',
        name: 'Sacha'
    },
    {
        id :'3',
        src : 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Sara Jay'
    },
    {
        id :'4',
        src : 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Nancy'
    },
    {
        id :'5',
        src : 'https://randomuser.me/api/portraits/women/3.jpg',
        name: 'Elesa'
    },
    {
        id :'6',
        src : 'https://randomuser.me/api/portraits/women/4.jpg',
        name: 'Masha'
    },
    {
        id :'7',
        src : 'https://randomuser.me/api/portraits/women/5.jpg',
        name: 'Katrina'
    },
    {
        id :'8',
        src : 'https://randomuser.me/api/portraits/women/6.jpg',
        name: 'Agniya'
    },
    {
        id :'9',
        src : 'https://randomuser.me/api/portraits/women/7.jpg',
        name: 'Natsha'
    },
    {
        id :'10',
        src : 'https://randomuser.me/api/portraits/women/8.jpg',
        name: 'Om Abdo'
    },

]



















































































































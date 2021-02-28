

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex_evenly' style={{width: '100%', backgroundColor: 'black', height: 80}} >
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to ='/contact'>Contact</Link>
        </div>
    )
}

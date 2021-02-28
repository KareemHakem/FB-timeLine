import './StylePost.css'
import Cards from './Card/Card'

export default function Post() {
    return (
        <div className='post'>
            {
                posts.map(post =>(
                    <Cards 
                        key={post.id}
                        name={post.name} 
                        photo={post.photo}
                        desc={post.desc}
                        src={post.src} 
                    />
                ))
            }
        </div>
    )
}



const posts  = [
    {
        id: '1',
        src: 'https://randomuser.me/api/portraits/women/12.jpg',
        name: 'Maria',
        photo: 'https://cdn.mos.cms.futurecdn.net/Tw4oCiJrKzJLgHrwMHuRHf.jpg',
        desc :'Yes, I am lost.But I am enjoying being lost with myself!'
    },
    {
        id: '2',
        src: 'https://randomuser.me/api/portraits/women/13.jpg',
        name: 'Natsha',
        photo: 'https://cdn.bmwblog.com/wp-content/uploads/2019/10/2020-BMW-M8-Competition-Coupe-Fire-Red-13.jpg',
        desc :'Yes, I am lost.But I am enjoying being lost with myself!'
    },
    {
        id: '3',
        src: 'https://randomuser.me/api/portraits/women/14.jpg',
        name: 'Natsha',
        photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-cena-1580330827.png',
        desc :'Yes, I am lost.But I am enjoying being lost with myself!'
    }
]
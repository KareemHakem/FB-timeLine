
import './StyleRow.css'

// import DeleteIcon from '@material-ui/icons/Delete';


export default function Row({Icon, title, onClick}) {



    return (
        <div className='row flex_align'>
            <Icon   fontSize='large' style={{color: 'gray', marginRight:20 }} />
            <h3>{title}</h3>
            {/* <DeleteIcon onClick={onClick}  style={{ color : 'red'}}/> */}
        </div>
    )
}

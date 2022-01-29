import './post.css'
import { Link } from 'react-router-dom'
import API from '../../api'



export default function Post({_id, photo, desc, title, categories, createdAt}) {
    const PF = `${API}/images/`;
    // const PF = 'https://th.bing.com/th/id/R.b9d0042c17cfae5240eac6b369c32455?rik=NNBlxgNPX%2f5pIQ&pid=ImgRaw&r=0'
    return (
        <>
            <Link to = {`/post/${_id}`} className="post link" key={_id} style={{padding: "0", margin: "0"}} className="post">
                {photo && (<img className="postImg" src={`${PF}${photo}`} alt="" />)}
                {/* {photo && (<img className="postImg" src={PF} alt="" />)} */}
                <div className="postInfo">
                    <div className="postCats">
                        {categories.map((cat) => ( <span className="postCat" key={cat._id}>{cat.name}</span> ))}    
                    </div>
                        <span className="postTitle">{title}</span><hr/>
                    <span className="postDate">{ new Date(createdAt).toDateString() }</span>
                </div>
                <p className="postDesc">{desc}</p>
            </Link>
        </>
    )
}

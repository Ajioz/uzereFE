import './post.css'
import { Link } from 'react-router-dom'


export default function Post({_id, photo, desc, title, categories, createdAt}) {
    return (
        <>
            <Link to = {`/post/${_id}`} style={{padding: "0", margin:'-20px auto 100px auto'}} className="post link" key={_id}>
                {photo && (<img className="postImg" src={photo} alt="" />)}
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

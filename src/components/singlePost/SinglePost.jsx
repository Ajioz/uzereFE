import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './singlePost.css';

import 'jquery'
import 'materialize-css';
import { TextInput, Textarea } from 'react-materialize'


import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import API from '../../api'


export default function SinglePost() {

    const PF = `${API}/images/`;

    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState(" ");
    const [name, setName] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const [updateMode, setUpdateMode] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        const getPost = async() => {
            const response = await axios.get(`${API}/api/posts/` + postId);
            setPost(response.data.post);
            setTitle(response.data.post.title);
            setDesc(response.data.post.desc);
            setName(response.data.post.categories);
        };
        getPost();
    },[postId]);


    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setError(false)
        }, 5000)
        return () => {
            clearTimeout(timeOut)
        }
    },[error]);


    const handleDelete = async() => {
        try {
            await axios.delete(`${API}/api/posts/${postId}`, {
                data: {username: user.username}
            });
            window.location.replace('/');
        } catch (error){}  
    };

    const  handleUpdate = async () => {
       const update = { username: user.username, title, desc, name };
       try {
            const story_update = await axios.put(`${API}/api/posts/${postId}`, update);
            setUpdateMode(false);
            setError(false)
            console.log('report', story_update);
            if(story_update.status === 201){
                window.location.replace('/');
                console.log(story_update.status);
            };
       }catch (error) {
            console.log('something went wrong', error);
            setError(true)
       }  
    }

    return (
        <div className="container">
            <div className="space"></div>
            <div  className="container">
                { post.photo && ( <img src={PF + post.photo} alt={post.title} className="singlePostImg" /> )}
                
                { updateMode ? (
                    <>
                        <TextInput 
                            className="validate blue-grey-text" 
                            autoFocus={ true } 
                            type="text" 
                            value={title}  
                            onChange={(e)=> setTitle(e.target.value)}  />

                        <TextInput 
                            className="validate blue-grey-text" 
                            type="text" 
                            value={name}  
                            onChange={(e)=> setName(e.target.value)}  />
                    </>
                ) : (
                     <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                     </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:   
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? (
                    <>
                        <div className="text-space"></div>
                        <div className="input-field col s12">
                            <Textarea  
                                className="validate blue-grey-text" 
                                value={desc}  
                                onChange={(e) => setDesc(e.target.value)}/>
                        </div>
                    </>
                    ) : ( 
                        <p className="singlePostDesc">{desc}</p> 
                    )
                }  
                {error && <p style={{color: 'red', fontSize:'12px'}}>Ooops!, Seems you didn't update category. Protip: Delete the old one and enter new CATEGORY...</p>}  
                { updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>) }   
                  
            </div>
        </div>
    )
}
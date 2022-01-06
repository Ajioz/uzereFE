import { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import Slider from '../../components/slider/Slides';
import Header from '../../components/header/Header'; 
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";
import API from '../../api'
import './home.css'
import logo from '../../components/assets/logo.png'
import Stat from '../../components/statistics/Stat';


export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
  
   
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`${API}/api/posts${search}`)
            
            //debug MongoDB image fetch
            response.data.posts.map((item)=>{
                return  console.log(item.photo)
            })
            setPosts(response.data.posts)
        }
        fetchPosts();
    }, [search])
    return (
        <>
            <div className="header">
                <div className="logoLeft">
                    <img 
                        src={logo} 
                        style={{width: '80px', height: '50px', marginTop: '60px' }} 
                        alt='comLogo' />
                </div>
                <div className="headerTitleSm"><h3>Uzere Food & Industries</h3></div>
            </div>
            < Slider />
            < Header />
            <div className="home">
                <Posts posts={posts} key={posts.Id}/>
                <Sidebar />
            </div>
            <section><Stat /></section> 
        </>
    )
}

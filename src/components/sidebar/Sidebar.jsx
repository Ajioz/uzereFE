import './sidebar.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import API from '../../api'

//Images
import farmer from '../assets/sidebar/farmer.jpg'
import flyer from '../assets/sidebar/flyer.jpg'
import yard from '../assets/sidebar/yard.jpg'
import Bag from '../assets/sidebar/Bags3.jpg'

export default function Sidebar() {
    let myLink = '/categories'
    const [category, setCategory] = useState([]);

    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
      const getCat = async () => {
          const response = await axios.get(`${API}/api/categories`);
          setCategory(response.data.cats);
      }
      getCat();
    }, [])

    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img src={farmer} alt="farm" data-aos="zoom-in-up" data-aos-delay="200" />
                <div className="sideborder" data-aos="fade-down" data-aos-delay="200">
                    <p data-aos="fade-down" data-aos-delay="400">
                          We are a Leading Cassava Processing company since 2008. Uzere Foods and Industries Ltd ( UFIL) is an agro-allied company, Formerly known as Uzere Cassava Processing Factory Ltd  which operates under the Public Private Partnership (PPP) under the Leadership of her Managing Director, Samuel Askia Jr.
                    </p>
                </div>
                
                <img src={flyer} alt="farm"  data-aos="zoom-in-down" data-aos-delay="200" /> 
                <div className="sideborder" data-aos="fade-down" data-aos-delay="200">
                    <p data-aos="fade-down" data-aos-delay="400">
                        Uzere cassava processing factory, is a cassava processing
                        company in Nigeria that is looking to meet the growing demand for
                        cassava starch. It is mainly used as food, but is also readily converted chemically,
                        physically, and biologically into many useful products today starch
                        is used to produce such diverse products as food, paper, textiles,
                        adhesives, beverages, confectionery, pharmaceuticals, and
                        building materials.
                    </p>
                </div>
            </div>

            <div className="sidebarItem">
                  <span className="sidebarTitle">CATEGORIES</span>
                  <ul className="sidebarList">
                    {category.map((cat)=>(
                        <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
                            <li className="sidebarListItem" data-aos="flip-left" data-aos-delay="100">{cat.name}</li>
                        </Link>
                    ))}
                  </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                     <a href="https://web.facebook.com/uzerecassavapf/" target="_blank">
                            <i className="topIcon fab fa-facebook-square"></i>
                        </a>

                        <a href="https://www.twitter.com/uzerecassava/" target="_blank">
                            <i className="topIcon fab fa-twitter-square"></i>
                        </a>

                        <a href="whatsapp://send?text=Hi, I'd love to know more about Uzere Farm, I am reaching you from your official webpage!&phone=+2348166227438" target="_blank">
                            <i className="topIcon fa fa-whatsapp" aria-hidden="true"></i>
                        </a>

                        <a href="https://www.instagram.com/uzerecassava/" target="_blank">
                            <i className="topIcon fab fa-instagram-square"></i>
                        </a>
                </div>
            </div>

            <div className="popular-farm">  
               <h4 className="foodTitle">Uzere Foods</h4>         
                <div className="category">
                    <ul className="category-list">
                        <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                        <a href={myLink}>Agro-allied </a>
                       
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                        <a href={myLink}>Poultry Products</a>
                       
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                        <a href={myLink}>Fish Feeds  </a>
                        
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                        <a href={myLink}>Broilers</a>
                       
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                        <a href={myLink}>Cassava  Processing</a>
                        
                        </li>
                    </ul>
                </div>
            </div>

            <div className="popular-post">
                <h4 className="foodTitle">Popular Post</h4>     
                <div className="post-content" data-aos="flip-up" data-aos-delay="100">
                    <div className="post-image">
                        <div><img className="img" src={yard} alt="Blog1" /></div>
                        <div className="post-info flex-row">
                            <span
                            >&nbsp;&nbsp;<i className="fas fa-calendar-alt text-gray"></i
                            >&nbsp;&nbsp; Uzere Food Industries, 2022 &nbsp;&nbsp;</span>
                            <span> - Book a Date with Us</span>
                        </div>
                    </div>
                    <div className="post-title">
                    <h6>NIGERIA'S Foremost Cassava Processing Company</h6>
                    </div>
                </div>
                <div className="post-content" data-aos="flip-right" data-aos-delay="300">
                    <div className="post-image">
                        <div>
                        <img className="img" src={Bag} alt="Blog1" /></div>
                        <div className="post-info flex-row">
                            <span
                            >&nbsp;&nbsp;<i className="fas fa-calendar-alt text-gray"></i
                            >&nbsp;&nbsp; Uzere Food Industries, 2022 &nbsp;&nbsp;</span>
                            <span> - Book a Date with Us</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <h6>Outgrower Partnership Programs as well as commercial sensitisation is currently ongoing.

</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

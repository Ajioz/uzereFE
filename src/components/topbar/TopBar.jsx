import  './topbar.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import API from '../../api'


export default function TopBar() {

    const PF = `${API}/images/`

    const { user, dispatch } = useContext(Context);
    const [navToggle, setNavToggle] = useState(false)

    let position = 'collapse'

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <>
            <div className={`nav ${ navToggle && position}`} >
                <div className="top nav-menu flex-row">
                    <div className="topLeft social text-gray">
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

                    <div className="toggle-collapse" onClick={()=> setNavToggle(!navToggle)}>
                        <div className="toggle-Icons">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>

                    <div className="topCenter"> 
                        <ul className="topList nav-items" onClick={()=> setNavToggle(!navToggle)}>
                            <li className="topListItem nav-link"><Link to ="/" className="link"> HOME  </Link></li>
                            <li className="topListItem nav-link"><Link to ="/about" className="link"> ABOUT </Link></li>
                            <li className="topListItem nav-link"><Link to ="/contact" className="link"> CONTACT</Link></li>
                            <li className="topListItem nav-link"><Link to ="/write" className="link"> WRITE </Link></li>
                            <li className="topListItem nav-link" onClick={handleLogout}>{user && 'LOGOUT'}</li>
                        </ul>
                    </div>
                
                    <div className="topRight" >
                        {
                            user ? (
                            <Link to="/settings" className="link"><img className="topImg" src={PF + user.profilePic} alt="here" /> </Link>  
                            ) : (
                                <ul className="topList" onClick={()=> setNavToggle(!navToggle)} >
                                    <li className="topListItem">
                                        <Link to ="/login" className="link" > LOGIN  </Link>
                                    </li>                           
                                </ul>
                            )
                        }
                        <i className="topSearchIcon fas fa-search"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

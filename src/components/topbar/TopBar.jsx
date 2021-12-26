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
        <div className={`nav ${ navToggle && position}`} >
            <div className="top nav-menu flex-row">
                <div className="topLeft social text-gray">
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fa fa-whatsapp"></i>
                    <i className="topIcon fab fa-instagram-square"></i>
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
                <div className="topRight">
                    {
                        user ? (
                        <Link to="/settings" className="link"><img className="topImg" src={PF + user.profilePic} alt="here" /> </Link>  
                        ) : (
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link to ="/login" className="link"> LOGIN  </Link>
                                </li>
                            {/* <li className="topListItem">
                                    <Link to ="/register" className="link"> REGISTER  </Link>
                            </li> */}
                            
                            </ul>
                        )
                    }
                    <i className="topSearchIcon fas fa-search"></i>
                </div>
            </div>
        </div>
    )
}

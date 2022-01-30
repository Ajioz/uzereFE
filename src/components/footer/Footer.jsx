import { useEffect } from 'react';
import './footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

import bag_branded from '../assets/bag_branded.jpg'
import staff from '../assets/staff.jpg'
import cassava from '../assets/Bags4.jpg'
import farmer from '../assets/footer_farmer.jpg'
import factory from '../assets/flyer.jpg'
import good from '../assets/logo.jpg'

const Footer = () => {

    const handleScroll = () =>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'   //for smooth scrolling
      });
    };

    useEffect(() => {
        Aos.init();
    },[])
  return (
    <>
      <footer className="footer">
        <div className="containerz">
          <div className="about-us" data-aos="fade-right" data-aos-delay="200">
            <h2>About Us</h2>
              <p>
                  UZERE FOODS AND INDUSTRIES LIMITED - NIGERIA FOREMOST CASSAVA PROCESSING COMPANY is a Leading Cassava Processing company since 2008. We are proudly Nigeria's foremost cassava processing company
                  leading the  initiative of Commercial Cassava Cultivation in Delta State and Environs. Partnering over Two Hundred Farmers in the Cultivation of Cassava.
              </p>
          </div>
          <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
            <h2>NewsLetter</h2>
            <p>Stay Updated with our latest</p>
            <div className="form-element">
              <input type="text" placeholder="Email" required />
              <span><i className="fas fa-chevron-right"></i></span>
            </div>
          </div>
          <div className="instagram" data-aos="fade-left" data-aos-delay="200">
            <h2>Instagram</h2>
            <div className="flex-row">
              <img src={bag_branded} alt="ins1" />
              <img src={staff} alt="ins2" />
              <img src={cassava} alt="ins3" />
            </div>
            <div className="flex-row">
              <img src={farmer} alt="ins4" />
              <img src={factory} alt="ins5" />
              <img src={good} alt="ins6" />
            </div>
          </div>

          <div className="follow" data-aos="fade-left" data-aos-delay="200">
            <h2>Follow Us</h2>
            <p>Let us be Social</p>
            <div>
                <a href="https://web.facebook.com/uzerecassavapf/" target="_blank" rel="noreferrer" >
                    <i className="topIcon fab fa-facebook-square"></i>
                </a>

                <a href="https://www.twitter.com/uzerecassava/" target="_blank" rel="noreferrer" >
                    <i className="topIcon fab fa-twitter-square"></i>
                </a>

                <a href="whatsapp://send?text=Hi, I'd love to know more about Uzere Farm, I am reaching you from your official webpage!&phone=+2348166227438" target="_blank" rel="noreferrer" >
                    <i className="topIcon fa fa-whatsapp" aria-hidden="true"></i>
                </a>

                <a href="https://www.instagram.com/uzerecassava/" target="_blank" rel="noreferrer" >
                    <i className="topIcon fab fa-instagram-square"></i>
                </a>
              </div>
            
            <h2>Call us on</h2>
            <div>
              <i className="fas fa-phone-volume"> +234-8166227438</i>
            </div>
          </div>
        </div>

        <div className="moveRight flex-row">
          <h4 className="text-gray">
            Copyright &copy; | 2021 All right reserved - Uzere Food Industries
          </h4>
        </div>

        <div className="move-up" onClick={handleScroll}>
          <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>
        </div>

    </footer>
    </>
  );
};

export default Footer;

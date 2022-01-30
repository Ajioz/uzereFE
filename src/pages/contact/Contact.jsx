import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <>
            <div className="cleanup"></div>
            <section id="contact">
                <div className="socialIcon">
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
                <div className="contact-box"> 
                    <div className="c-heading">
                        <h1>Get in Touch</h1>
                        <p>Call or Email Us Regarding Your Need or Issue</p>
                    </div>   
                    <div className="c-inputs">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="email@gmail.com" />
                        <textarea name="message" placeholder="Write Message"></textarea>
                        <button>Send</button>
                    </div>
                </div>
                <div className="map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8068651.87641677!2d8.674253!3d9.084576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ed28673da1bd%3A0xe21d70bea07b7e5f!2sUZERE%20CASSAVA%20PROCESSING%20FACTORY!5e0!3m2!1sen!2sng!4v1643494054617!5m2!1sen!2sng" style={{border:"0",  width:'600px', height:"450px"}} allowFullScreen="" loading="lazy" title='direction'></iframe>
                </div>
            </section>
        </>
    )
}

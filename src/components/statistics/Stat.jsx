import { Link } from 'react-router-dom'
import React from 'react'
import './stat.css'

export default function Stat() {
    return (
        <div className="before-footer">
            <div className="sypnosis">
                <div className="sypnosis-heading" data-aos="fade-down" data-aos-delay="100">
                    <h2>Why trust us to Help you</h2>
                </div>
                <div className="sypnosis-content">
                    <div data-aos="fade-left" data-aos-delay="200">
                        <h5>High Grade Facilities</h5>
                        <p>
                            UFIL is exploring an innovative approach to improve cassava value chain, agro-processing  
                            and industrial utilization of Cassava by product by implementing modern innovative technology. Equipped with a modern Laboratory, Uzere Foods and Industries Ltd  prides herself in High Quality Food Grade Starch and Flour.
                        </p>
                        <button className="btnz"><Link to ="/contact" className="btn-blog">Learn More</Link></button>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="300">
                        <h5>Our Goals</h5>
                        <p>
                           Is to sell the finest quality cassava derivative; Starch, Flour, and other affiliated product to local and International client. Improve cassava value chain by industrialisation of Cassava and provide career opportunities for interested farmers. To  enhance Cassava Cultivation through our programs.
                        </p>
                        <button className="btnz"><Link to ="/contact" className="btn-blog">Learn More</Link></button>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="400">
                        <h5>Fetching Statistics</h5>
                        <p>
                           Today, more than 1 billion people depend on agriculture for  livelihoods. Farmers being an important assest in national economy, are gaining support from us and governemnt alike. We are set up to help you scale and reach the market quickly.  Our support system gives you the cassava supply needs.
                        </p>
                        <button className="btnz"><Link to ="/contact" className="btn-blog">Learn More</Link></button>
                    </div>
                </div>
            </div>

            <div className="statistics">
                <div className="statistics-heading" data-aos="flip-down" data-aos-delay="100"> 
                    <h2>More than 14 Years of Experience</h2>
                </div>
                <div className="statistics-content">
                    <div className="stat-icon" data-aos="fade-right" data-aos-delay="100">
                    <i className="fas fa-suitcase"></i>
                    <span>22MT Prod Capacity</span>
                    </div>
                    <div  className="stat-icon" data-aos="flip-up" data-aos-delay="100">
                    <i className="fas fa-award"></i>
                    <span>Award Winning Business</span>
                    </div>
                    <div  className="stat-icon" data-aos="fade-left" data-aos-delay="100">
                    <i className="fas fa-thumbs-up"></i>
                    <span>200 satisfied farmers</span>
                    </div>
                </div>
            </div>

            <div className="contact-us">
            <p data-aos="fade-left" data-aos-delay="100">
                We look forward to bringing our traditional dedication to work while providing your starch and cassave needs.
            </p>
            <button className="btnz form-btn" data-aos="fade-right" data-aos-delay="100"> 
                <Link to ="/contact" className="btn-blog"> Contact Us </Link>
            </button>
            </div>
        </div>
    )
}

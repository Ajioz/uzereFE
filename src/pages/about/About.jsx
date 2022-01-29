import './about.css'
import 'jquery'
import 'materialize-css'
import Header from '../../components/header/Header'
import staff from '../../components/assets/staff.jpg'
import processed from '../../components/assets/Bags_floor.jpg'
import equipment from '../../components/assets/factory.png'
import secongImg from '../../components/assets/uzere_equipment.png'


export default function About() {

    return (
        <>
            <Header />
            <div className="row">
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutLeft">MOTIVATION</h3>
                      <i className="aboutIcon fa fa-lightbulb-o"></i>
                    <p className="gridCont grey-text text-darken-4">Starch is one of the most abundant substances in nature, a renewable and almost unlimited resource for millions of Africans. However, it is a difficult crop for farmers to process, hence we were set up, to help farmers.</p>
                </div>
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutRight">MISSION</h3>
                    <i className="aboutIcon fa fa-rocket"></i>
                    <p className="gridCont grey-text text-darken-4">Improve cassava value chain by industrialisation of Cassava and provide career opportunities for interested farmers. and to sell the finest quality cassava derivative; to local and International client.</p>
                </div>
                <div className="col s12 m4 l4 ">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card">
                                <div className="card-image">
                                    <img className="gridImg" src={staff} alt=" " style={{height: '330px'}} />
                                    <span className="card-title">Goal & Motivation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutLeft">SECURITY</h3>
                     <i className="aboutIcon fa fa-shield"></i>
                    <p className="gridCont grey-text text-darken-4">Providing sufficient processed Cassava that meets market demand is our philosophy.  We are step ahead to providing food security to our locals optimally.</p>
                </div>
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutRight">EQUIPMENT</h3>
                    <i className="aboutIcon fa fa-cogs"></i>
                    <p className="gridCont grey-text text-darken-4">We are exploring innovative approach to improving cassava value chain. Equipped with a modern Technology, Uzere Foods and Industries prides herself in High Quality Starch and Flour.</p>
                </div>
                <div className="col s12 m4 l4">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card">
                                <div className="card-image">
                                    <img className="gridImg" src={processed}  style={{height: '330px'}} alt="" />
                                    <span className="card-title">Food Security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutLeft">PROCESSING</h3>
                     <i className="aboutIcon fa fa-recycle"></i>
                    <p className="gridCont grey-text text-darken-4">UZERE FOODS AND INDUSTRIES LIMITED - NIGERIA FOREMOST CASSAVA PROCESSING COMPANY is a Leading Cassava Processing company since 2008.</p>
                </div>
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutRight">PARTNERSHIP</h3>
                     <i className="aboutIcon fa fa-handshake-o"></i>
                    <p className="gridCont grey-text text-darken-4">Uzere cassava processing factory, is a cassava processing company in Nigeria that is looking to meet the growing demand for cassava starch. We are parnererd with with over 200 farmers.</p>
                </div>
                <div className="col s12 m4 l4">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card">
                                <div className="card-image">
                                    <img className="gridImg" src={equipment}  style={{height: '330px'}} alt=" " />
                                    <span className="card-title">Process Plant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="secondHead green accent-4">
                    <div className="col s12 m12 l6">
                        <img src={secongImg} style={{height: '70vh'}} className="imgR responsive-img" alt="content" />
                        <span className="flow-text"></span>
                    </div>
                    <div className="col s12 m12 l6 headerLeft left">
                        <h1>UZERE Pride</h1>
                        <p > 
                            We are proudly Nigeria's foremost cassava processing company
                            UFIL has been leading the  initiative of Commercial Cassava Cultivation in Delta State and Environs. Partnering over Two Hundred Farmers in the Cultivation of Cassava.
                        </p>
                        <span className="flow-text"></span>
                    </div>
                </div>
            </div>

            <h1 id="connect">Subscribe to Our Newsletter</h1>
            <section id="newsletter">
                <div className="container">
                    <div className="row form">
                        <form id="contact-form" className="col s12"  >
                            <div className="row">
                                <div className="input-field col s6">
                                    <input  id="first_name" name="first_name" type="text" className="validate black-text" required />
                                <label for="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" name="last_name" type="text" className="validate black-text" required />
                                <label for="last_name">Last Name</label>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" name="email" className="validate black-text" required />
                                <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" name="message" className="materialize-textarea black-text" required></textarea>
                                    <label for="textarea1">Message</label>
                                </div>
                            </div>
                            <button className="btn green accent-4 waves-effect waves-light" type="submit" name="action">Send
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
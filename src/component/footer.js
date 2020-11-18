import React, { Component } from 'react';

class Footer extends Component {
   
    render() {
        // let {sec} = this.state;
        return (
            <React.Fragment>
        <div className="sections">
            <div className="container">
                    <h6>
                        POPULAR CATAGROIES
                    </h6>
                    <div>           
                        <ul className="container">
                            <li><a className="greys" href="#">Cars</a></li>
                            <li><a className="greys" href="#">Flats for rent</a></li>
                            <li><a className="greys" href="#">Jobs</a></li>
                            <li><a className="greys" href="#">Mobile phones</a></li>
                        </ul>
                    </div>
            </div>
                
            <div className="container">
                <h6>
                    TRADEING SEARCH
                </h6>
                <div>           
                    <ul className="container">
                        <li><a className="greys" href="#">Watches</a></li>
                        <li><a className="greys" href="#">Bikes</a></li>
                        <li><a className="greys" href="#">Books</a></li>
                        <li><a className="greys" href="#">Dogs</a></li>
                    </ul>
                </div>
            </div>
                
            <div className="container">
                <h6>
                    ABOUT US
                </h6>
                <div>           
                    <ul className="container">
                        <li><a className="greys" href="#">About OLX Group</a></li>
                        <li><a className="greys" href="#">OLX Blog</a></li>
                        <li><a className="greys" href="#">Contact Us</a></li>
                        <li><a className="greys" href="#">OLX For Businesses</a></li>
                    </ul>
                </div>
            </div>
                
            <div className="container">
                <h6>
                    OLX
                </h6>
                <div>           
                    <ul className="container">
                        <li><a className="greys" href="#">Help</a></li>
                        <li><a className="greys" href="#">Sitemap</a></li>
                        <li><a className="greys" href="#">Legal & Privacy Information</a></li>
                         
                    </ul>
                </div>
            </div>
            <div className="container">
                <h6>
                FOLLOW US
                </h6>
                <div>           
                    <ul className="container ">
                        <li><a className="greys" href="#">Help</a></li><br></br>
                        <li><a href="#"><img  className="newimg" src="https://statics.olx.com.pk/external/base/img/appstore_2x.png"/><span >
                        <img  className="newimg" src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" /></span></a></li>
                        
                    </ul>
                </div>
            </div>
                
        </div>
            
            <div className="footers">
                <div>
                <p>Other  Countries <span className="ext"><a  className="ext1" href="#">India</a> - <a className="ext1" href="#">South Africa</a> - <a className="ext1" href="#">Indonesia</a></span></p>
                </div>
                <div>
                    <p>Free Classifieds in Pakistan . 2006-2020 OLX</p>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Footer;

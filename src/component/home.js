import React,{Component} from 'react';
import Header from "./header";
import Footer from "./footer";
import Braner from "../barner/image.png";
import Cards from "./cards/cards";
import Cng from "./cards/rickshaw";
import Civic from "./cards/civic";
import Fortuner from "./cards/fotuner"; 
import House from "./cards/house"
import Shop from "./cards/shop"
import Laptop from "./cards/laptop"
import Honda from "./cards/honda";
import Aircon from "./cards/aircon";
import Tables from "./cards/table"
import Machines from "./cards/machines"
import Mobiles from "./cards/mobiles"
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                <Header/>
                </div>
            <div className="container-fuild">
                <div>
                    <img className="barner" src={Braner} alt=""/>
                </div>
            </div>
                <div  className="border border-light rounded p-3 mb-2 bg-light text-dark container mt-2  py-4 px-3 bg-secondry">
                    <h3 className="mb-5">
                        Fresh recommendations
                    </h3>
                
                <div className="justify">
                    <Cards/>
                    <Cng/>
                    <Civic/>
                    <Fortuner/>
                
                </div>
            </div>
            <div className="p-3 mt-2 container">
                <div className=" justify">
                    <House/>
                    <Shop/>
                    <Laptop/>
                    <Aircon/>
                </div>
            </div>
            <div className="p-3 mt-2 container">
                <div className="justify">
                    <Honda/>
                    <Tables/>
                    <Machines/>
                    <Mobiles/>
                </div>
            </div>

            
            <div>            
                <button className="load-more anim b font size20">
                    Load more
                </button>
            </div>
            <div className="app-ribbon flexs aic">                
                <div className="def">
                <img src="https://statics.olx.com.pk/external/base/img/phone-app.png" alt=""/>
            </div>
            <div className="meta">
                <h2 className="title font b size color">Try the OLX App</h2>
                <h2 className="slogan font b size14 color ">Buy, sell and find just about anything<br/> using the app on your mobile.</h2>
            </div>
            <div className="space"/>
            
            <div className="links">
                <h2 className="title font b size24 color">GET YOUR APP TODAY</h2>
                    <div className="flexs as noul ibl">
                        <a href="#" className="size14">
                            <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt=""/><span className="link1">
                            <img  src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="" /></span>
                        </a>
                    </div>
                </div>
        </div>
        <div>
        <Footer/>
        </div>
        </React.Fragment>
            
        );
    }
}

export default Home;


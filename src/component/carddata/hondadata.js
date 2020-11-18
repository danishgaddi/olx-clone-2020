import React, { Component } from 'react';
import Honda from "../cardsimg/honda125.jpg";
import Header from "../header"
import Footer from "../footer"
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import image from "../cardsimg/avatar.png";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import Sukkar from "../mapimg/Sukkur.gif";
// import logo from "../../olxlogo/olx.png";
class Hondadata extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
            <div className="container-fluid mt-5 mb-5">
                <div className="row" >
                    <div className="col-md-7">
                        <div>
                            <img src={Honda} style={{width:"800px"}} />
                        </div>
                        <div className="mt-3 p-4" style={{border:"1px solid black", width:"800px"}}>
                            <h3 className="ml-3 mt-1">Details</h3>
                            <p className="mt-3 para">Make<span>Honda</span><span>Year</span><span>2020</span></p>
                            <p className="mt-3" style={{marginLeft:"75px"}}>Condition<span style={{marginLeft:"125px"}}>Used</span></p>
                            <hr style={{border:"1px solid black"}}/>
                            <h3 className= "mt-1 mb-4">Description</h3>
                            <p className="">Honda CG 125 <br/>Honda 125 is Euro sound<br/>Honda 125 is completely fine condition<br/>Honda 125 have a complete File and papers<br/>Only interested person can contact me<span></span></p>
                        </div>
                    </div>
                    <div className="col-md-4" style={{border:"1px solid black",height:"150px",marginLeft:"70px"}}>
                        <div>
                            <h2 className="mt-3">Rs:85000<span style={{float:"right",fontSize:"30px"}}><ShareTwoToneIcon style={{marginRight:"30px"}}/><FavoriteBorderIcon/></span></h2>
                            <p>Honda CG 125 2020 good condition</p>
                            <p>Sukkar, Sindh, Pakistan<span style={{float:"right"}}>21days ago</span></p>
                        </div>
                        <div className="mt-5 p-2" style={{border:"1px solid black",marginTop:"20px",height:"250px",marginLeft:"-15px",width:"450px"}}>
                            <h4 className="mt-3">Seller Description</h4>
                            <p><img src={image} style={{width:"80px",marginRight:"30px"}}/><span  style={{fontSize:"20px",fontWeight:"bold"}}>OLX Seller</span><ChevronRightIcon style={{float:"right",fontSize:"45px",marginTop:"15px"}}/></p>
                            <Button variant="contained" color="primary" style={{width:"430px"}}>
                                Chat With Seller
                            </Button>
                            <div style={{marginTop:"20px"}}>
                                <PhoneOutlinedIcon style={{marginRight:"20px",marginLeft:"100px"}}/><spn style={{marginTop:"20px",color:"black",fontWeight:"bold"}}>***********</spn><span style={{textDecoration:"underline",color:"Blue",marginLeft:"10px",marginbottom:"-10px"}}>Show Number</span>
                            </div>
                        </div>
                        <div className="mt-5 p-2" style={{border:"1px solid black",marginTop:"20px",height:"350px",marginLeft:"-15px",width:"450px"}}>
                            <h4 className="mt-3 mx-2">Posted In</h4>
                            <div style={{width:"500px"}}><img src={Sukkar} style={{width:"400px",marginLeft:"15px",height:"270px"}}/></div>
                            <div className="mt-4">
                                <h6>AD ID 1234567890 <span style={{float:"right"}}>Report THIS AD</span></h6>
                            </div>
                            <div style={{textAlign:"center",marginTop:"100px",fontWeight:"bold"}}>
                                <h2 style={{fontWeight:"bold"}}>OLX</h2>
                                <h6 style={{fontWeight:"bold"}}>World Famous Buying and Selling Platform </h6>
                            </div>
                        </div>
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

export default Hondadata;
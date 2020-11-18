import React, { Component } from 'react';
import image from "../olxlogo/olx.png"
import GoogleButton from 'react-google-button';
import { FacebookLoginButton } from "react-social-login-buttons";
import {Link} from "react-router-dom";
// import Header from "../component/header"
class Login extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Header/> */}
            <div className="LOGIN bg-danger rounded-circle" style={{width:"500px", border:"1px solid black", height:"450px",margin:"0 auto", textAlign:"center",marginTop:"70px"}}>
                <div className="logos">
                    <img src={image} style={{marginTop:"40px", width:"150px"}}/>
                </div>
                <div>
                    <h4 style={{marginTop:"30px"}}>Sign In</h4>
                    <Link to="/"><h4 style={{marginTop:"10px", color:"black"}}>Back To Home </h4></Link>  
                </div>
                <div style={{marginTop:"20px", marginLeft:"130px"}}>
                    <GoogleButton/>
                </div>
                <div style={{marginTop:"15px",width:"250px",marginLeft:"125px"}}>
                    <FacebookLoginButton/>
                </div>
                <div style={{margin:"10px 0"}}>
                    <p className="text-light">Copyright © Your Website 2020</p>
                </div>
            </div>
            
            </React.Fragment>
        );
    }
}

export default Login;


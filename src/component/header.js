import React, { Component } from 'react';
import Logo from "../olxlogo/olx.png";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import Login from "./login";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        const nav =[
            {Id:1, label: "Mobile Phones"},
            {Id:2, label: "Cars"},
            {Id:3, label: "Motorcycles"},
            {Id:4, label: "Houses"},
            {Id:5, label: "Tv-Video-Audio"},
            {Id:6, label: "Tablets"},
            {Id:7, label: "Land & Plots"}

        ]
        return (
            <React.Fragment>
                
            <div className="header fixeds flexs aic">
                <div className="logos">
                <Link to="/"><img src={Logo}/></Link>
                </div>
                <div className="location reletives ">
                    <div className="icon-search ico size22">
                        <SearchIcon/>
                        <input className="Labels size15 font" placeholder="Your location" value="Pakistan"/>
                            <KeyboardArrowDownIcon className="size24"/>
                    </div>    
                </div>
                <div className="search flexs aic ">
                    <input type="text" placeholder="Find Cars,Mobile Phones and more..." className="quries"/>
                    {/* <button > */}
                        <div  className="icon-search go size20">
                        <SearchIcon/>
                        </div>
                    {/* </button> */}
                </div>
                <div className="action flexs aic">
                        <Link to="/login" style={{color:"black",fontWeight:"bold",fontSize:"20px"}}>Login</Link>
                    <div className="sell">
                        <div className="icon-plus fontn  flexs aic size16">
                            <AddIcon/>
                            <h2 className="color size18  ico1 fontb">SELL</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hnav fixeds flexs aic">
                <div className="veiw-cates flexs aic color">
                <h2 className=" size18 fontb ">All Catagories</h2>
                <KeyboardArrowDownIcon className="h2 size24"/>
                {/* <button className="icon-chevron-down fontb size20 arrow"></button> */}
                </div>
                {
                    nav.map(item=>{
                        // return <a href={"/browser" + item.Id} className="noul noulh color bl font size15">{item.label}</a>
                    return <Link to={"/browser" + item.Id} className="noul noulh color bl font size15">{item.label}</Link> 
                    })
                }
            </div>
            <div className="hclr"/>
            </React.Fragment>
            
        );
    }
}

export default Header;

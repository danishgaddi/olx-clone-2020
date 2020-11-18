import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../home"
import Login from "../login";
import Browser1 from "../browser1"
import Bikedata from "../carddata/bikedata";
import Rickshaw from "../carddata/rickshawdata";
import Civic from "../carddata/civicdata";
import Fortuner from "../carddata/fortunerdata";
import House from "../carddata/housedata";
import Shop from "../carddata/shopdata";
import Laptop from "../carddata/laptopdata";
import Haier from "../carddata/haierdata";
import Honda from "../carddata/hondadata";
import Tables from "../carddata/tabledata";
import Washing from "../carddata/washdata";
import Mobile from "../carddata/mobiledata";
// import Header from "../header";
// import Stores from "../store"
class Approuter extends Component {
    render() {
        return (
            <div>
                <Router>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={Login}/>
                <Route path="/browser1" component={Browser1}/>
                <Route path="/bikedata" component={Bikedata} />
                <Route path="/rickshawdata" component={Rickshaw} />
                <Route path="/civicdata" component={Civic} />
                <Route path="/fortunerdata" component={Fortuner} />
                <Route path="/housedata" component={House} />
                <Route path="/shopdata" component={Shop} />
                <Route path="/laptopdata" component={Laptop} />
                <Route path="/hondadata" component={Honda} />
                <Route path="/haierdata" component={Haier} />
                <Route path="/washdata" component={Washing} />
                <Route path="/mobiledata" component={Mobile} />
                <Route path="/tabledata" component={Tables} />
                </Router>
            </div>
        );
    }
}

export default Approuter;
import React, { Component } from 'react';
import "./pro.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./component/config/Approuter"
class App extends Component {
    render() {
        return (
            <div>
               <AppRouter/>
            </div>
        );
    }
}

export default App;
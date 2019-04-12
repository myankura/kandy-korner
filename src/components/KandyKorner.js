import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./kandykorner.css"
//Do not forget to run npm install react-router-dom bootstrap at root folder before using this dependency.
import "bootstrap/dist/css/bootstrap.min.css"

//This script file is responsible for displaying the NavBar and ApplicationsView
export default class KandyKorner extends Component {
    render() {
        return(
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}
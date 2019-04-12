import React, { Component } from "react"
import { Link } from "react-router-dom"

//Do not forget to run npm install react-router-dom bootstrap at root folder before using this dependency.
import "bootstrap/dist/css/bootstrap.min.css"


//create a navbar for kandy korner app
export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-items">
                    <Link className="nav-link" to="/">Stores</Link>
                    </li>
                    <li className="nav-items">
                    <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-items">
                    <Link className="nav-link" to="/candies">Candies</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
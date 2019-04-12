import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import CandyList from './candy/CandyList'

//Responsible for acting as an API.  This will soon be replaced by an API that will serve the same functionality that this code is doing now.
export default class ApplicationsView extends Component {
    // Store locations
    locationsFromAPI = [
        { id: 1, name: "North Nashville", address: "606 Champs Lane" },
        { id: 2, name: "East Nashville", address: "431 Studious Road" }
    ]
    // Employees
    employeesFromAPI = [
        { id: 1, name: "Michael" },
        { id: 2, name: "Ted" }
    ]
    // Candy types
    typesFromAPI = [
        { id: 1, type: "Chocolate" },
        { id: 2, type: "Hard Candy" }
    ]
    // Individual candies
    candiesFromAPI = [
        { id: 1, name: "Butterfinger", type_Id: 1 },
        { id: 2, name: "Jolly Rancher", type_Id: 2 }
    ]

    state = {
        locations: this.locationsFromAPI,
        employees: this.employeesFromAPI,
        types: this.typesFromAPI,
        candies: this.candiesFromAPI
    }

    //This is what is responsible for routing traffic for the NavBar
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }
}

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import CandyList from './candy/CandyList'

//Acting as an API
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
        { id: 1, name: "Chocolate" },
        { id: 2, name: "Hard Candy" }
    ]
    // Individual candies
    candiesFromAPI = [
        { id: 1, name: "Butterfinger", typeId: 1 },
        { id: 2, name: "Jolly Rancher", typeId: 2 }
    ]

    state = {
        locations: this.locationsFromAPI,
        employees: this.employeesFromAPI,
        types: this.typesFromAPI,
        candies: this.candiesFromAPI
    }

    //This is what is responsible for passing data to each respective component
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
                    return <CandyList candies={this.state.candies}  types={this.state.types} />
                }} />
            </React.Fragment>
        )
    }
}

import React, { Component } from "react"
import LocationList from "./location/LocationList"
import EmployeeList from "./employee/EmployeeList"
import CandyList from "./candy/CandyList"


// Store locations
// Employees
// Candy types
// Individual candies
class KandyKorn extends Component {
    // Store locations
    locationsFromAPI = [
        { id: 1, name: "North Nashville" },
        { id: 2, name: "East Nashville" }
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

    // <StoreList />
    // <EmployeeList />
    // <CandyList />
    render() {
        return (
            <article className="kandykorner">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candies={this.state.candies} />
            </article>
        )
    }
}



export default KandyKorn
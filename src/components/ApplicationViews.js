import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import CandyList from './candy/CandyList'

//Acting as an API
export default class ApplicationsView extends Component {

    state = {
        locations: [],
        employees: [],
        types: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/employees"))
            .then(r => r.json())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/types"))
            .then(r => r.json())
            .then(types => newState.types = types)
            .then(() => fetch("http://localhost:5002/candies"))
            .then(r => r.json())
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
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

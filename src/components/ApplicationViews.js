import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import CandyList from './candy/CandyList'
import CandiesManager from '../modules/CandiesManager'
import EmployeeManager from '../modules/EmployeesManager'
import LocationManager from '../modules/LocationsManager'
import TypesManager from '../modules/TypesManager'

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

        //fetch all data
        CandiesManager.getAll()
            .then(candies => newState.candies = candies)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => TypesManager.getAll())
            .then(types => {
                newState.types = types
                this.setState(newState)
            })
    }

    //Delete candies from API and refresh state
    deleteCandy = id => {
        return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/candies`))
            .then(e => e.json())
            .then(candies => this.setState({
                candies: candies
            })
            )
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
                <Route exact path="/candies" render={() => {
                    return <CandyList deleteCandy={this.deleteCandy} candies={this.state.candies} types={this.state.types} />
                }} />
            </React.Fragment>
        )
    }
}

// .then(() => fetch("http://localhost:5002/candies"))
//             .then(r => r.json())
//             .then(candies => newState.candies = candies)
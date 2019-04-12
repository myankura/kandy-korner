import React, { Component } from "react"

//This component is responsible for mapping through employees and rendering them to the DOM
export default class EmployeeList extends Component {
    render() {
        return(
            <section className="content">
                <h3>Our Employees</h3>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                        </div>)
                }
            </section>
        )
    }
}
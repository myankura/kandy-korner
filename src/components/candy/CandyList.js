import React, { Component } from "react"
import "../../components/kandykorner.css"

//This component is responsible for mapping through candies and rendering them to the DOM
export default class CandyList extends Component {
    render () {
        return (
            <section className="content">
            <h3>Candy</h3>
            {
                this.props.candies.map(candy =>
                    <div key={candy.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <h2>{candy.name}</h2>
                                    <div>of type</div>
                                        {
                                            this.props.types.find(types => types.id === candy.typeId).name
                                        }
                                    <br></br>
                                    <button
                                        onClick={() => this.props.deleteCandy(candy.id)}
                                        className="card-link">Delete</button>
                            </h5>
                        </div>`
                    </div>
                )
            }
            </section>
        )
    }
}
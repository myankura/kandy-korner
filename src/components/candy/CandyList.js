import React, { Component } from "react"

//This component is responsible for mapping through candies and rendering them to the DOM
export default class CandyList extends Component {
    render() {
        return(
            <section className="content">
                <h3>Our Candies</h3>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            {candy.name}
                        <span> type of </span>
                            {
                                this.props.types
                                .find(type => candy.typeId === type.id)
                                .name
                            }
                        </div>)
                }
            </section>
        )
    }
}
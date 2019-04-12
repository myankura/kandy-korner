import React, { Component } from "react"

export default class CandyList extends Component {
    render() {
        return(
            <section className="candies">
                <h3>Our Candies</h3>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            {candy.name}
                        </div>)
                }
            </section>
        )
    }
}
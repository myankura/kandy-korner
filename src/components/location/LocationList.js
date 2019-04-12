import React, { Component } from "react"


//This component is responsible for mapping through locations and rendering them to the DOM
export default class LocationList extends Component {
    render() {
        return(
            <section className="content">
                <h3>Our Locations</h3>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name}
                            <br></br>
                            {location.address}
                            <hr></hr>
                        </div>)
                }
            </section>
        )
    }
}
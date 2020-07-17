import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const newlist = this.state.tours.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      tours: newlist,
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourList">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} info={tour} removeTour={this.removeTour}></Tour>
          );
        })}
      </section>
    );
  }
}

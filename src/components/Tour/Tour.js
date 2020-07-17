import React, { Component } from "react";
import "./tour.scss";

export default class tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // const { id, city, img, name, info } = this.props.info;
    const { id, city, img, name, info } = this.props.info;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt="destination" />
          <span className="close-btn">
            <i
              onClick={() => removeTour(id)}
              className="fas fa-window-close"
            ></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

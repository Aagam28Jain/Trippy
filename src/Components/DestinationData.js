import { Component } from "react";
import { render } from "react-dom";
import "./DestinationStyles.css";
import snow from "../assets/snow.jpg";
import beach from "../assets/1.jpg";
import water from "../assets/water.jpg";
import house from "../assets/house.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="tourist place" />
          <img src={this.props.img2} alt="tourist place" />
        </div>
      </div>
    );
  }
}
export default DestinationData;

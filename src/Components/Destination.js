import "./DestinationStyles.css";
import snow from "../assets/snow.jpg";
import beach from "../assets/1.jpg";
import water from "../assets/water.jpg";
import house from "../assets/house.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to explore</p>
      <DestinationData
        heading="Taal Volcano,Bahamas"
        text=" A tourist destination is a city, town, or other area that is significantly dependent on revenues from tourism, or a country, state, region, city, or town which is marketed or markets itself as a place for tourists to visit. It may contain one or more tourist attractions and possibly some tourist traps. "
        img1={beach}
        img2={snow}
        className="first-des"
      />
      <DestinationData
        heading="Mt.Dagulkul,Bahamas"
        text=" To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.

        "
        img1={water}
        img2={house}
        className="first-des-reverse"
      />
    </div>
  );
};
export default Destination;

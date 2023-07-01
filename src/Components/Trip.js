import TripData from "./TripData";
import "./TripStyles.css";
import balon from "../assets/landscape.jpg";
import jaipur from "../assets/jaipur.jpg";
import barwaha from "../assets/barwaha.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p> you can Discover destinations using Google maps</p>
      <div className="tripcard">
        <TripData
          image={balon}
          heading="Trip to Bhramatal"
          text="joyous ride with your friend .food shelter 
        clothing accessories nothing to worry about.
        Every adventure at Tripp only"
        />
        <TripData
          image={jaipur}
          heading="Trip in Jaipur"
          text="land of culture and tradition .spices at it's best
          beauty like never seen before .mesmerising beauti.
          Land known for it's culture"
        />
        <TripData
          image={barwaha}
          heading="Trip to Barwaha"
          text="on the banks of river Narmada lies this beautifull
          yet smart city named Barwaha.this town is known for it's unique culture 
          and religious beliefs."
        />
      </div>
    </div>
  );
}
export default Trip;

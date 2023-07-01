import "./FooterStyles.css";
const Footer = () => {
  return (
    /*footer class is for the whole footer div */

    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div>
          <a href="/">
            {" "}
            <i className="fa-brands fa-facebook-square"></i>{" "}
          </a>
          <a href="/">
            {" "}
            <i className="fa-brands fa-instagram-square"></i>{" "}
          </a>
          <a href="/">
            {" "}
            <i className="fa-brands fa-twitter-square"></i>{" "}
          </a>
          <a href="/">
            {" "}
            <i className="fa-brands fa-whatsapp-square"></i>{" "}
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">changelon</a>
          <a href="/">status</a>
          <a href="/">license</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Twitter</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Github</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
/*top is for upper footer where name and links are present */
/*bottom is for lower footer where all the things are written */

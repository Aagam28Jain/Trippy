import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/landscape.jpg";
import Footer from "../Components/Footer";
import Aboutus from "../Components/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title=" About "
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
    </>
  );
}
export default About;

import "./HeroStyle.css";
function Hero(pros) {
  return (
    <>
      <div className={pros.cName}>
        <img alt="Heroimg" src={pros.heroImg} />
      </div>
      <div className="hero-text">
        <h1>{pros.title}</h1>
        <p>{pros.text}</p>
        <a href={pros.url} className={pros.btnClass}>
          {pros.ButtonText}
        </a>
      </div>
    </>
  );
}
export default Hero;
/*"" */

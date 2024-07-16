import "./herosection.css";
import heroImage from "../../assets/heroImage.png";
import imgBanner from "../../assets/imagenbanner.jpg";

export const HeroSection = () => {
  return (
    <section className="hero">
      <img className="img-banner" src={imgBanner} alt="banner img" />
      <div className="overlay"/>
      <div className="banner">
        <div className="left">
          <h1 className="left-title">front end</h1>
          <div className="left-info">
            <span className="left-info-title">Challenge React</span>
            <p className="left-info-description">
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
        </div>

        <div className="right">
          <img src={heroImage} alt="imagen de el hero" />
        </div>
      </div>
    </section>
  );
};

import bgImg from "./hero.png";
import s from "./hero.module.scss";
const Hero = () => {
  return <img className={s.bg} src={bgImg} />;
};

export default Hero;

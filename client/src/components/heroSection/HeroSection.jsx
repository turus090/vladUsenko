import Button from "./Button/Button";
import s from "./heroSection.module.scss";
const HeroSection = () => {
  const btnInfo = ["instagram", "facebook", "telegram"];
  return (
    <section>
      <div>
        {btnInfo.map((btnType, index) => {
          return <Button key={index} btnType={btnType} />;
        })}
      </div>
      <div></div>
    </section>
  );
};

export default HeroSection;

import { InstagramIcon, FacebookIcon, TelegramIcon } from "../../common/Icons";
import s from "./button.module.scss";
const Button = ({ btnType }) => {
  let Icon;
  switch (btnType) {
    case "instagram":
      Icon = InstagramIcon;
      break;
    case "telegram":
      Icon = TelegramIcon;
      break;
    case "facebook":
      Icon = FacebookIcon;
      break;
    default:
      Icon = null;
      break;
  }
  console.log(Icon);
  return (
    <button className={s.btn}>
      {
        <div>
          <Icon />
        </div>
      }
    </button>
  );
};

export default Button;

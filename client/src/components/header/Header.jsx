import Nav from "./nav/Nav";
import s from "./header.module.scss";
import logoImg from "./logo.png";
const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header_logo} src={logoImg} />
      <Nav />
    </header>
  );
};

export default Header;

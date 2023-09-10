import s from "./nav.module.scss";
const Nav = () => {
  const navInfoUa = ["Послуги", "Про мене", "Результат", "Блог", "Контакти"];
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        {navInfoUa.map((navText, index) => {
          return (
            <li className={s.nav_list_item} key={index}>
              <a className={s.nav_list_item_link} href="#">
                {navText}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

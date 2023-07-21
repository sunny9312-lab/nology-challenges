import { NavLink } from 'react-router-dom';
//NavLink는 내부에서 움직이는것,link to는 외부로 보내는것?
import style from './NavBar.module.scss';
const NavBar = () => {
  const activeStyles = ({ isActive }) =>
    isActive ? `${style.link} ${style.active_link}` : style.link;

  return (
    <nav className={style.nav}>
      <NavLink className={activeStyles} to='/'>
        Home
      </NavLink>
      <NavLink className={activeStyles} to='/projects'>
        Projects
      </NavLink>
      <NavLink className={activeStyles} to='/contact'>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;

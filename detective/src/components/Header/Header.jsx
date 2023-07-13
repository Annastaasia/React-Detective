import { Link } from "react-router-dom";
import Burger from "../Nav/Burger.jsx";
import Logo from "../../assets/images/logo.svg";
import style from "./header.module.scss";

function Header() {
  return (
    <>
      <header>
        <div className={style.header}>
          <Link to="/">
            <img src={Logo} alt="logo" className={style.logo} />
          </Link>
          <Burger />
          {/* <h1 className="App__header__h1">English cards</h1>
          <div className="App__header__buttons">
            <Link to="/game">
              <button className="App__header__game"></button>
            </Link>
            <Link to="/English-words-card">
              <button className="App__header__home"></button>
            </Link>
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;

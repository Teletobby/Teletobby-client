import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="top-bar">
          <p>Teletobby hahmjimin & kimsejin</p>
        </div>
        <hr className="hr-solid1" />
        <div className="header-inner desktop">
          <Link to="/">
            <img alt="header-logo" src="https://ifh.cc/g/qqF7Na.png" />
          </Link>
          <div className="main-title">TELETOBBY SHOP</div>
          <div className="main-category">
            <Link to="/purchase">
              <p className="purchase">구매</p>
            </Link>
            <Link to="/rental">
              <p className="rental">대여</p>
            </Link>
            <Link to="/group-buying">
              <p className="group-buying">공구</p>
            </Link>
          </div>
          <div className="main-function">
            <Link to="/mypage">
              <p className="mypage">MyPage</p>
            </Link>
            <Link to="/signin">
              <p className="signin">SignIn</p>
            </Link>
            <Link to="/signup">
              <p className="signup">SignUp</p>
            </Link>
          </div>
        </div>
        <hr className="hr-solid2" />
      </header>
    </>
  );
}

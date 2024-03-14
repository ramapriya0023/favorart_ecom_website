import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import FullLogo from "../../resources/FullLogo.png";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img
            style={{
              height: "100px",
              width: "100px",
            }}
            alt="My Image"
            src={FullLogo}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-In">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

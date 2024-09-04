import logo from "../images/logo.svg"
import PageLinks from './PageLinks'



const Navbar = () => {
  return (
    <div>
      <nav classname="navbar">
        <div classname="nav-center">
          <div classname="nav-header">
            <img src={logo} classname="nav-logo" alt="backroads" />
            <button type="button" classname="nav-toggle" id="nav-toggle">
              <i classname="fas fa-bars" />
            </button>
          </div>
          <PageLinks parentClass='nav-links' itemClass='nav-link' />
          <ul classname="nav-icons">
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                classname="nav-icon"
              >
                <i classname="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                classname="nav-icon"
              >
                <i classname="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                classname="nav-icon"
              >
                <i classname="fab fa-squarespace" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

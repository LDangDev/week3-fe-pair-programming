import logo from "../images/logo.svg"



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
          <ul classname="nav-links" id="nav-links">
            <li>
              <a href="#home" classname="nav-link">
                home
              </a>
            </li>
            <li>
              <a href="#about" classname="nav-link">
                about
              </a>
            </li>
            <li>
              <a href="#services" classname="nav-link">
                services
              </a>
            </li>
            <li>
              <a href="#tours" classname="nav-link">
                tours
              </a>
            </li>
          </ul>
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

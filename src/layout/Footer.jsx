import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__socials">
          <Link to="https://www.instagram.com/faakhrii03/">
            <i className="ri-instagram-line"></i>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100088924454057">
            <i className="ri-facebook-circle-fill"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/fakhrigajar/">
            <i className="ri-linkedin-box-fill"></i>
          </Link>
          <Link to="https://github.com/itzjustfitb">
            <i className="ri-github-fill"></i>
          </Link>
        </div>
        <p>
          Designed & Built by
          <span>Fakhri Gajar</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

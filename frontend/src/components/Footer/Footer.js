import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="pt-4 bg-dark">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 col-lg-4 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="text-uppercase">Contactos</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-home mr-3"></i>San Miguel de Tucumán, 25
                  de mayo 890, Argentina
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope mr-3"></i> rollingames@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-4 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="text-uppercase mb-3">rollinGames</h5>
            <p>Acá vas a encontrar los mejores juegos y publicaciones!</p>
            <p>Toda la diversion que necesitas esta aquí!</p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-2 col-lg-4 text-betwen mx-auto my-4">
            <h5 className="text-uppercase mb-4">Seguinos en:</h5>
            <a
              href="https://facebook.com"
              target="blank"
              className="text-decoration-none"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://github.com/EricERodriguez/Proyecto-final-Rolling"
              target="blank"
              className="text-decoration-none"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://instagram.com"
              target="blank"
              className="text-decoration-none"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com"
              target="blank"
              className="text-decoration-none"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://youtube.com"
              target="blank"
              className="text-decoration-none"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-center mb-0 mt-2">
          &copy;{new Date().getFullYear()} RollingGame APP - All Rights
          Reserved{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
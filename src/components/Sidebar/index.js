import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s3.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin,  faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      {/* <img className="sub-logo" src={LogoSubtitle} alt="slobdon" /> */}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/gujjarsaab/">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer noopener' href="https://github.com/gujjarsaab01">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer noopener' href="https://www.instagram.com/gujjar_saab_94">
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer noopener' href="https://youtube.com/@motivationmashup">
                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
            </a>
        </li>
    </ul>
  </div>
)

export default Sidebar

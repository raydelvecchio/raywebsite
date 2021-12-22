import './footer.css'
import email from './resources/email.png'
import github from './resources/github.png'
import linkedin from './resources/linkedin.png'

const Footer = () => (
    <footer className="footer">
        <p className="copyrightname">&copy; Raymond Del Vecchio 2022
            <a href="https://www.linkedin.com/in/raymond-del-vecchio/">
                <img className="icon" src={linkedin}  alt="linkedin"/>
            </a>
            <a href="https://github.com/raydelvecchio">
                <img className="icon" src={github}  alt="github"/>
            </a>
            <a href="mailto:raymond_del_vecchio@brown.edu">
                <img className="icon" src={email}  alt="email"/>
            </a>
        </p>
    </footer>
);

export default Footer;
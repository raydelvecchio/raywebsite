import './style/footer.css'
import Tripleicons from './tripleicons'
import Iconsource from "./iconsource";

/** sticky footer */
const Footer = () => (
    <div>
        <footer className="footer">
            <p className="copyrightname">&copy; Raymond Del Vecchio 2022</p>
        </footer>
        <Tripleicons/>
        <Iconsource/>
    </div>
);

export default Footer;
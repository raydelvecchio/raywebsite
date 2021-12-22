import './style/footer.css'
import email from './resources/email.png'
import github from './resources/github.png'
import linkedin from './resources/linkedin.png'

const Tripleicons = () => (
    <div className="icons">
        <a href="https://www.linkedin.com/in/raymond-del-vecchio/" target="_blank">
            <img className="icon" src={linkedin}  alt="linkedin"/>
        </a>
        <a href="https://github.com/raydelvecchio" target="_blank">
            <img className="icon" src={github}  alt="github"/>
        </a>
        <a href="mailto:raymond_del_vecchio@brown.edu">
            <img className="icon" src={email}  alt="email"/>
        </a>
    </div>
)

export default Tripleicons

import "../Header/Header.css";
import MainLogo from "../../images/main-logo.png";
import HomeIcon from "../../images/home-icon.png";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="Header">

            <img src={MainLogo} />
            <Link to={`/`}><img src={ HomeIcon }/></Link>

        </div>
    )
}

export default Header;
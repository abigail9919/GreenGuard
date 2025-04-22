import ClearFern from "../../images/fern-clear.png";
import { Link } from "react-router-dom";
import "./TitlePage.css";

function Home() {
    return(
        <div className="Home-wrapper">
            <div className="background-image-wrapper">
                <img className="ClearFern" src={ClearFern}></img>
            </div>
            <h1>GREEN <br /> GUARD</h1>
            <Link to={`/admin-login`}><button className="adminLoginButton">Admin Login</button></Link>
        </div>
    )
}

export default Home;
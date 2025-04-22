import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import ClearFern from "../../images/fern-clear.png";
import "./Home.css";

function Home() {
    return(
        <div className="Home-wrapper">
            {/* <Header /> */}
            {/* keeping this just so i can see it later */}
                {/* <div className="Task"><Link to={`/manage-shows`}>Manage Shows</Link></div>
                <div className="Task"><Link to={`/manage-videos`}>Manage Videos</Link></div> */}
            
            <div className="Image-wrapper">
                <img src={ClearFern}></img>
            </div>
            <h1>
                GREEN <br />
                GUARD
            </h1>
            <Link to={`/admin-login`}><button className="adminLoginButton">Admin Login</button></Link>

        </div>
    )
}

export default Home;
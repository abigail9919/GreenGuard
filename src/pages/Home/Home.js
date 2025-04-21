import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return(
        <div className="Home-wrapper">
            <Header />

            <div className="Task-wrapper">
                <div className="Task"><Link to={`/manage-shows`}>Manage Shows</Link></div>
                <div className="Task"><Link to={`/manage-videos`}>Manage Videos</Link></div>
            </div>

        </div>
    )
}

export default Home;
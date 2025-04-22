import { Link } from 'react-router-dom';
import Fiddle from "../../images/fiddle.png";
import Pothos from "../../images/pothos.png";
import "./AdminLogin.css";

function AdminLogin() {
    return(
        <div className="AdminLogin-wrapper">
            <div className="background-image-wrapper">
                <img className="fiddle-img" src={Fiddle}></img>
                <img className="pothos-img" src={Pothos}></img>
            </div>
            <div className="login-wrapper">
                <h2 className="adminLogin-header">Welcome back, Admin</h2>

                <form className="adminLoginForm">
                    <div className="inputs">
                        <div className="form-floating">
                            <input type="username" className="form-control shadow-none" id="username" placeholder="Username" />
                            <label for="username">Username</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control shadow-none" id="password" placeholder="Password" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                </form>
                <Link to={`/home`}><button type="submit" className="login-button">Login</button></Link>
                <Link to={`/`}><a className="titleScreenLink">Return to title screen</a></Link>
            </div>
        </div>
    )
}

export default AdminLogin;
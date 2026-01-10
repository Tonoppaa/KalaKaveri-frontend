import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function LoginForm() {

    // Login-näkymä

    return (
        <div className="login-container">
            <div className="mainbox">
                <h1>Kirjaudu sisään</h1>
                <div className="input-box">
                    <FaUser className="icon right" />
                    <input type="text"
                        placeholder="Käyttäjätunnus"
                    />

                </div>
                <div className="input-box">
                    <FaLock className="icon right" />
                    <input type="password"
                        placeholder="Salasana"
                    />

                </div>
                <button type="submit">Kirjaudu</button>
                <div className="links">
                    <Link to="/forgotpassword">
                        Unohtuiko salasana?
                    </Link>
                    <Link to="/register">
                        Luo käyttäjätunnus
                    </Link>
                </div >
            </div >
        </div>
    )
}

export default LoginForm;
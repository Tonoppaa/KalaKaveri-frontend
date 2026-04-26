import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function LoginForm() {
    return (
        <div className="login-container">

            {/* BACKGROUND */}
            <div className="login-bg" />

            {/* LOGIN CARD */}
            <motion.div
                className="login-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>🎣 Kalakaveri</h1>
                <p className="subtitle">Kirjaudu sisään</p>

                {/* USERNAME */}
                <div className="input-group">
                    <FaUser className="input-icon" />
                    <input type="text" placeholder="Käyttäjätunnus" />
                </div>

                {/* PASSWORD */}
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input type="password" placeholder="Salasana" />
                </div>

                {/* BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="login-btn"
                >
                    Kirjaudu
                </motion.button>

                {/* LINKS */}
                <div className="links">
                    <Link to="/forgotpassword">Unohtuiko salasana?</Link>
                    <Link to="/register">Luo käyttäjätunnus</Link>
                </div>
            </motion.div>
        </div>
    );
}

export default LoginForm;
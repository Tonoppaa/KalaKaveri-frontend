import './CreateNewUserForm.css';
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function CreateNewUserForm() {
    return (
        <div className="register-container">

            {/* BACKGROUND */}
            <div className="register-bg" />

            {/* CARD */}
            <motion.div
                className="register-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>🆕 Luo käyttäjä</h1>
                <p className="subtitle">
                    Luo uusi tili aloittaaksesi
                </p>

                {/* USERNAME */}
                <div className="input-group">
                    <FaUser className="input-icon" />
                    <input type="text" placeholder="Käyttäjätunnus" />
                </div>

                {/* EMAIL */}
                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input type="email" placeholder="Sähköpostiosoite" />
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
                    className="register-btn"
                >
                    Luo käyttäjä
                </motion.button>

                {/* LINKS */}
                <div className="links">
                    <p>
                        Onko sinulla jo käyttäjätunnus?{" "}
                        <Link to="/login">Palaa takaisin</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default CreateNewUserForm;
import './ForgotPasswordForm.css';
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ForgotPasswordForm() {
    return (
        <div className="forgot-container">

            {/* BACKGROUND */}
            <div className="forgot-bg" />

            {/* CARD */}
            <motion.div
                className="forgot-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>🔐 Palauta salasana</h1>
                <p className="subtitle">
                    Syötä sähköpostiosoitteesi saadaksesi palautuslinkin
                </p>

                {/* EMAIL */}
                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input
                        type="email"
                        placeholder="Sähköpostiosoite"
                    />
                </div>

                {/* BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="forgot-btn"
                >
                    Lähetä palautuslinkki
                </motion.button>

                {/* LINKS */}
                <div className="links">
                    <Link to="/">Takaisin kirjautumiseen</Link>
                </div>
            </motion.div>
        </div>
    );
}

export default ForgotPasswordForm;
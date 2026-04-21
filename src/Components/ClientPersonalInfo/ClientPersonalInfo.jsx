import ClientNavbar from "../ClientNavbar/ClientNavbar";
import "../ClientNavbar/ClientNavbar.css";
import "./ClientPersonalInfo.css";

import { Card, CardContent } from "../UI/Card";
import { Camera, User, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ClientPersonalInfo() {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [saved, setSaved] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
        // TODO: Lähetä tiedot backendille
    };

    return (
        <>
            <ClientNavbar />

            <div className="personal-info-page">
                <h1 className="personal-info-title">🎣 Henkilökohtaiset tiedot</h1>

                {/* SAVE CONFIRMATION POPUP */}
                <AnimatePresence>
                    {saved && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="save-popup-container"
                        >
                            <motion.div className="save-popup-content" initial={{ y: 50 }} animate={{ y: 0 }}>
                                <h2>💾 Tiedot tallennettu!</h2>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className="personal-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card>
                        <CardContent className="personal-info-content">
                            {/* Profile Image */}
                            <div className="profile-image-section">
                                <label htmlFor="profileImageUpload" className="profile-image-label">
                                    {profileImage ? (
                                        <img src={profileImage} alt="Profiili" className="profile-image" />
                                    ) : (
                                        <Camera size={40} className="camera-icon" />
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="profileImageUpload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {/* Personal Info Fields */}
                            <div className="info-fields">
                                <div className="info-field">
                                    <User size={20} />
                                    <input
                                        type="text"
                                        placeholder="Nimi"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="info-field">
                                    <Mail size={20} />
                                    <input
                                        type="email"
                                        placeholder="Sähköposti"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="info-field">
                                    <Phone size={20} />
                                    <input
                                        type="tel"
                                        placeholder="Puhelin"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <button className="save-button" onClick={handleSave}>
                                    💾 Tallenna
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </>
    );
}
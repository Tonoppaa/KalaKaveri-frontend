import ClientNavbar from "../ClientNavbar/ClientNavbar";
import "../ClientNavbar/ClientNavbar.css";
import "./ClientFishingAchievements.css";

import { Card, CardContent } from "../UI/Card";
import { Fish, Trophy, Star, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const species = [
    { name: "Ahven", levels: [10, 100, 1000], caught: 120 },
    { name: "Hauki", levels: [5, 50, 500], caught: 42 },
    { name: "Kuha", levels: [3, 30, 300], caught: 12 },
];

const achievements = [
    { title: "Ensimmäinen kala", desc: "Sait ensimmäisen kalasi", icon: Trophy, unlocked: true },
    { title: "Kalastaja", desc: "Sait 100 kalaa yhteensä", icon: Fish, unlocked: true },
    { title: "Mestari", desc: "Sait 1000 kalaa yhteensä", icon: Star, unlocked: false },
];

function getProgress(caught, levels) {
    let currentLevel = 0;
    for (let i = 0; i < levels.length; i++) {
        if (caught >= levels[i]) currentLevel = i + 1;
    }
    const nextLevel = levels[currentLevel] || levels[levels.length - 1];
    const prevLevel = levels[currentLevel - 1] || 0;
    const progress = ((caught - prevLevel) / (nextLevel - prevLevel)) * 100;
    return { currentLevel, nextLevel, progress: Math.min(progress, 100) };
}

export default function ClientFishingAchievements() {
    const [levelUp, setLevelUp] = useState(false);
    const [levelText, setLevelText] = useState("");

    const checkLevelUp = (fish, currentLevel, levels) => {
        if (currentLevel >= levels.length) {
            setLevelText(`${fish.name} maksimitaso saavutettu!`);
            setLevelUp(true);
        }
    };

    useEffect(() => {
        if (levelUp) {
            const timer = setTimeout(() => setLevelUp(false), 2500);
            return () => clearTimeout(timer);
        }
    }, [levelUp]);

    return (
        <>
            {/* Navbar mukana */}
            <ClientNavbar />

            <div className="achievements-page">
                <h1 className="achievements-title">🎣 Saavutukset</h1>

                {/* LEVEL UP POPUP */}
                <AnimatePresence>
                    {levelUp && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="levelup-popup-container"
                        >
                            <div className="levelup-popup-overlay" />
                            <motion.div className="levelup-popup-content" initial={{ y: 50 }} animate={{ y: 0 }}>
                                <h2 className="levelup-popup-title">🎉 LEVEL UP!</h2>
                                <p className="levelup-popup-text">{levelText}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <button onClick={() => {
                    setLevelText("Testi popup!");
                    setLevelUp(true);
                }}>
                    Testaa Level Up
                </button>
                <div className="species-grid">
                    {species.map((fish) => {
                        const { currentLevel, nextLevel, progress } = getProgress(fish.caught, fish.levels);
                        const isMax = currentLevel >= fish.levels.length;

                        return (
                            <motion.div
                                key={fish.name}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => checkLevelUp(fish, currentLevel, fish.levels)}
                            >
                                <Card className={`fish-card ${isMax ? "max-level" : ""}`}>
                                    <CardContent className="fish-card-content">
                                        <div className="fish-card-header">
                                            <h2 className="fish-name">{fish.name}</h2>
                                            <Fish size={20} />
                                        </div>
                                        <p className="fish-caught">{fish.caught} kpl pyydetty</p>

                                        {/* MODERNI PROGRESS BAR */}
                                        <motion.div
                                            className="fish-progress"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            style={{
                                                height: "12px",
                                                borderRadius: "8px",
                                                background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
                                                position: "relative",
                                                overflow: "hidden",
                                                marginTop: "8px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: "-100%",
                                                    width: "100%",
                                                    height: "100%",
                                                    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                                                    animation: "shine 2s infinite",
                                                }}
                                            />
                                        </motion.div>
                                        <p className="fish-level">
                                            Taso {currentLevel} {isMax ? "(MAX)" : `→ seuraava: ${nextLevel}`}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                <div>
                    <h1 className="achievements-subtitle">🏆 Erikoissaavutukset</h1>
                    <div className="achievements-grid">
                        {achievements.map((a) => (
                            <motion.div key={a.title} whileHover={{ scale: 1.05 }}>
                                <Card className={`achievement-card ${a.unlocked ? "unlocked" : "locked"}`}>
                                    <CardContent className="achievement-card-content">
                                        <div className={`achievement-icon ${a.unlocked ? "unlocked" : "locked"}`}>
                                            {a.unlocked ? <a.icon /> : <Lock />}
                                        </div>
                                        <div>
                                            <p className="achievement-title">{a.title}</p>
                                            <p className="achievement-desc">{a.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import CatchChart from "../CatchChart/CatchChart";
import "./ClientFrontPage.css";

import { Card, CardContent } from "../UI/Card";
import { motion } from "framer-motion";
import { Fish, Trophy, Clock } from "lucide-react";

export default function ClientFrontPage() {
    return (
        <>
            <ClientNavbar />

            <div className="frontpage">
                <div className="dashboard">

                    {/* HERO */}
                    <motion.div
                        className="hero"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>🎣 Tervetuloa takaisin, Tommi</h1>
                        <p>Valmis uusiin kalastusseikkailuihin?</p>
                    </motion.div>

                    {/* STATS */}
                    <div className="stats">
                        {[
                            { icon: <Fish />, value: 24, label: "Saaliita" },
                            { icon: <Trophy />, value: 6, label: "Saavutusta" },
                            { icon: <Clock />, value: 3, label: "Tällä viikolla" },
                        ].map((stat, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.05 }}>
                                <Card className="stat-card">
                                    <CardContent>
                                        <div className="stat-icon">{stat.icon}</div>
                                        <h3>{stat.value}</h3>
                                        <p>{stat.label}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* TOP ROW */}
                    <div className="top-row">
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card className="front-card">
                                <CardContent>
                                    <h2>🌦️ Sää tänään</h2>
                                    <p className="muted">
                                        Tarkista sää ennen kalastusta ☀️🌧️
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="front-card">
                                <CardContent>
                                    <h2>📊 Saaliit kuukausittain</h2>
                                    <CatchChart />
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* BOTTOM ROW */}
                    <div className="bottom-row">

                        {/* ACTIVITY */}
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Card className="front-card">
                                <CardContent>
                                    <h2>Viimeaikainen toiminta</h2>

                                    <div className="activity">
                                        <div className="activity-item">
                                            <p>🎣 Lisäsit saaliin</p>
                                            <span>17.11.2025 - Hauki, Päijänne</span>
                                        </div>

                                        <div className="activity-item">
                                            <p>🎣 Lisäsit saaliin</p>
                                            <span>15.11.2025 - Ahven, Vesijärvi</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* ACHIEVEMENTS */}
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Card className="front-card">
                                <CardContent>
                                    <h2>Saavutukset</h2>

                                    <div className="achievement">
                                        <div>🏆 Pyydystit ensimmäisen kuhan</div>
                                        <div>🏆 10 saalista saavutettu</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
}
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import CatchChart from "../CatchChart/CatchChart";
import "./ClientFrontPage.css";

import { Card, CardContent } from "../UI/Card";
import { Skeleton } from "../UI/Skeleton";
import { motion } from "framer-motion";
import { Fish, Trophy, Clock } from "lucide-react";

import { useState, useEffect } from "react";

export default function ClientFrontPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

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
                        <h1><Fish /> Tervetuloa takaisin, Tommi</h1>
                        <p>Valmis uusiin kalastusseikkailuihin?</p>
                    </motion.div>

                    {/* STATS */}
                    <div className="stats">
                        {[
                            { icon: <Fish />, value: 24, label: "Saaliita" },
                            { icon: <Trophy />, value: 6, label: "Saavutusta" },
                            { icon: <Clock />, value: 3, label: "Tällä viikolla" },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Card className="stat-card">
                                    <CardContent>
                                        <div className="stat-icon">
                                            {stat.icon}
                                        </div>

                                        {loading ? (
                                            <Skeleton height={24} width="40%" />
                                        ) : (
                                            <h3>{stat.value}</h3>
                                        )}

                                        {loading ? (
                                            <Skeleton height={16} width="60%" />
                                        ) : (
                                            <p>{stat.label}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* CONTENT GRID */}
                    <div className="content-grid">

                        {/* RECENT ACTIVITY */}
                        <motion.div whileHover={{ scale: 1.03 }}>
                            <Card className="stat-card">
                                <CardContent>
                                    <h2>🎣 Viimeaikainen toiminta</h2>

                                    <div className="activity">
                                        {loading ? (
                                            <>
                                                <Skeleton width="80%" />
                                                <Skeleton width="60%" />
                                                <Skeleton width="70%" />
                                            </>
                                        ) : (
                                            <>
                                                <div className="activity-item">
                                                    <p>🎣 Lisäsit saaliin</p>
                                                    <span>
                                                        17.11.2025 - Hauki, Päijänne
                                                    </span>
                                                </div>

                                                <div className="activity-item">
                                                    <p>🎣 Lisäsit saaliin</p>
                                                    <span>
                                                        15.11.2025 - Ahven, Vesijärvi
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* WEATHER */}
                        <motion.div whileHover={{ scale: 1.03 }}>
                            <Card className="stat-card">
                                <CardContent>
                                    <h2>🌦️ Sää tänään</h2>

                                    <p className="muted">
                                        Tarkista sää ennen kalastusta ☀️🌧️
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* CHART */}
                        <motion.div whileHover={{ scale: 1.03 }}>
                            <Card className="stat-card">
                                <CardContent>
                                    <h2>📊 Saaliit kuukausittain</h2>

                                    {loading ? (
                                        <Skeleton height={200} />
                                    ) : (
                                        <CatchChart />
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* ACHIEVEMENTS */}
                        <motion.div whileHover={{ scale: 1.03 }}>
                            <Card className="stat-card">
                                <CardContent>
                                    <h2>🏆 Saavutukset</h2>

                                    <div className="achievement">
                                        {loading ? (
                                            <>
                                                <Skeleton width="90%" />
                                                <Skeleton width="70%" />
                                            </>
                                        ) : (
                                            <>
                                                <div>
                                                    🏆 Pyydystit ensimmäisen kuhan
                                                </div>

                                                <div>
                                                    🏆 10 saalista saavutettu
                                                </div>
                                            </>
                                        )}
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
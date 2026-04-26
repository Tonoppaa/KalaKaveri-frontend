import ClientNavbar from "../ClientNavbar/ClientNavbar";
import "../ClientNavbar/ClientNavbar.css";
import "./ClientRemoveCatch.css";

import { Card, CardContent } from "../UI/Card";
import { Fish, Calendar, Weight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const catches = [
    {
        id: 1,
        species: "Ahven",
        weight: "1.2 kg",
        date: "2026-04-01",
        image: "https://via.placeholder.com/300x200",
        location: "Tohloppijärvi"
    },
    {
        id: 2,
        species: "Hauki",
        weight: "4.5 kg",
        date: "2026-03-28",
        image: "https://via.placeholder.com/300x200",
        location: "Jämijärvi"
    },
    {
        id: 3,
        species: "Kuha",
        weight: "2.3 kg",
        date: "2026-05-23",
        image: "https://via.placeholder.com/300x200",
        location: "Kemijärvi"
    },
    {
        id: 4,
        species: "Kirjolohi",
        weight: "1.2 kg",
        date: "2026-06-18",
        image: "https://via.placeholder.com/300x200",
        location: "Päijänne"
    },
];

export default function ClientRemoveCatch() {
    const [selectedCatch, setSelectedCatch] = useState(null);
    const [filter, setFilter] = useState("");

    const filtered = catches.filter(c =>
        c.species.toLowerCase().includes(filter.toLowerCase())
    );

    return (

        <>
            <ClientNavbar />

            <div className="browse-page">
                <h1 className="browse-title">❌ Poista saalis</h1>

                {/* FILTER */}
                <input
                    className="browse-filter"
                    placeholder="Hae kalaa..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

                {/* GRID */}
                <div className="browse-grid">
                    {filtered.map((c) => (
                        <motion.div
                            key={c.id}
                            whileHover={{ scale: 1.05 }}
                            className="browse-card-wrapper"
                            onClick={() => setSelectedCatch(c)}
                        >
                            <Card className="browse-card">
                                <CardContent>
                                    <img src={c.image} alt="" className="browse-image" />

                                    <div className="browse-info">
                                        <h2 className="browse-species">{c.species}
                                            <Fish size={18} /> {c.species}
                                        </h2>

                                        <div className="browse-meta">
                                            <span><Weight size={16} /> {c.weight}</span>
                                            <span><Calendar size={16} /> {c.date}</span>
                                            <span><MapPin size={16} /> {c.location}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* MODAL */}
                <AnimatePresence>
                    {selectedCatch && (
                        <motion.div
                            className="browse-modal-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCatch(null)}
                        >
                            <motion.div
                                className="browse-modal-content"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedCatch.image}
                                    alt=""
                                    className="browse-modal-image" />

                                <h2>{selectedCatch.species}</h2>
                                <p>⚖️ {selectedCatch.weight}</p>
                                <p>📅 {selectedCatch.date}</p>
                                <p>📍 {selectedCatch.location}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
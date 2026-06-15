import ClientNavbar from "../ClientNavbar/ClientNavbar";
import "./ClientFishBank.css";

import { Card, CardContent } from "../UI/Card";
import { Fish, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fishData = [
    {
        id: 1,
        name: "Ahven",
        latin: "Perca fluviatilis",
        size: "0.2 – 1.5 kg",
        habitat: "Järvet, joet",
        image: "images/perch.jpg"
    },
    {
        id: 2,
        name: "Hauki",
        latin: "Esox lucius",
        size: "1 – 15 kg",
        habitat: "Järvet, murtovesi",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 3,
        name: "Kuha",
        latin: "Sander lucioperca",
        size: "1 – 10 kg",
        habitat: "Sameat järvet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 4,
        name: "Taimen",
        latin: "Salmo trutta",
        size: "1 – 10 kg",
        habitat: "Joet, järvet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 5,
        name: "Kirjolohi",
        latin: "Oncorhynchus mykiss",
        size: "1 – 5 kg",
        habitat: "Istutettu",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 6,
        name: "Siika",
        latin: "Coregonus lavaretus",
        size: "0.5 – 3 kg",
        habitat: "Kirkkaat järvet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 7,
        name: "Muikku",
        latin: "Coregonus albula",
        size: "0.05 – 0.2 kg",
        habitat: "Syvät järvet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 8,
        name: "Made",
        latin: "Lota lota",
        size: "0.5 – 5 kg",
        habitat: "Kylmät vedet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 9,
        name: "Harjus",
        latin: "Thymallus thymallus",
        size: "0.3 – 2 kg",
        habitat: "Virtaavat vedet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 10,
        name: "Rautu",
        latin: "Salvelinus alpinus",
        size: "0.5 – 5 kg",
        habitat: "Pohjois-Suomi",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 11,
        name: "Lohi",
        latin: "Salmo salar",
        size: "2 – 20 kg",
        habitat: "Joet, meri",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 12,
        name: "Särki",
        latin: "Rutilus rutilus",
        size: "0.1 – 1 kg",
        habitat: "Kaikki vedet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 13,
        name: "Lahna",
        latin: "Abramis brama",
        size: "1 – 6 kg",
        habitat: "Rehevät järvet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 14,
        name: "Pasuri",
        latin: "Blicca bjoerkna",
        size: "0.2 – 1 kg",
        habitat: "Järvet",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 15,
        name: "Sorva",
        latin: "Scardinius erythrophthalmus",
        size: "0.2 – 1 kg",
        habitat: "Kasvillisuusalueet",
        image: "https://via.placeholder.com/300x200"
    }
];

export default function ClientFishBank() {
    const [selectedFish, setSelectedFish] = useState(null);
    const [filter, setFilter] = useState("");

    const filtered = fishData.filter(f =>
        f.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <ClientNavbar />

            <div className="browse-page">
                <h1 className="browse-title">🐟 Kalapankki</h1>

                {/* FILTER */}
                <input
                    className="browse-filter"
                    placeholder="Hae kalaa..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

                {/* GRID */}
                <div className="browse-grid">
                    {filtered.map((f) => (
                        <motion.div
                            key={f.id}
                            whileHover={{ scale: 1.05 }}
                            className="browse-card-wrapper"
                            onClick={() => setSelectedFish(f)}
                        >
                            <Card className="browse-card">
                                <CardContent>
                                    <img src={f.image}
                                        alt=""
                                        className="browse-image" />

                                    <div className="browse-info">
                                        <h2 className="browse-species">
                                            <Fish size={18} /> {f.name}
                                        </h2>

                                        <div className="browse-meta">
                                            <span>📏 {f.size}</span>
                                            <span>🌍 {f.habitat}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* MODAL */}
                <AnimatePresence>
                    {selectedFish && (
                        <motion.div
                            className="browse-modal-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFish(null)}
                        >
                            <motion.div
                                className="browse-modal-content"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.button
                                    className="browse-modal-close"
                                    onClick={() => setSelectedFish(null)}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={24} />
                                </motion.button>
                                <img src={selectedFish.image}
                                    alt=""
                                    className="browse-modal-image" />

                                <h2>{selectedFish.name}</h2>
                                <p>📘 {selectedFish.latin}</p>
                                <p>📏 {selectedFish.size}</p>
                                <p>🌍 {selectedFish.habitat}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
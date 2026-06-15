import ClientNavbar from "../ClientNavbar/ClientNavbar";
import "./Locations.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const lakes = [
    { id: 1, name: "Päijänne", city: "Lahti", coords: [61.5, 25.5], fish: ["Kuha", "Ahven", "Hauki", "Taimen"] },
    { id: 2, name: "Saimaa", city: "Lappeenranta", coords: [61.2, 28.0], fish: ["Kuha", "Ahven", "Hauki", "Muikku", "Lohi"] },
    { id: 3, name: "Inarijärvi", city: "Inari", coords: [68.9, 27.0], fish: ["Rautu", "Taimen", "Siika", "Harjus", "Hauki"] },

    { id: 4, name: "Oulujärvi", city: "Kajaani", coords: [64.3, 27.3], fish: ["Kuha", "Ahven", "Hauki", "Made"] },
    { id: 5, name: "Pielinen", city: "Lieksa", coords: [63.3, 30.0], fish: ["Kuha", "Taimen", "Ahven", "Hauki"] },
    { id: 6, name: "Näsijärvi", city: "Tampere", coords: [61.6, 23.7], fish: ["Kuha", "Ahven", "Hauki", "Siika"] },
    { id: 7, name: "Pyhäjärvi", city: "Tampere", coords: [61.4, 23.6], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 8, name: "Vanajavesi", city: "Hämeenlinna", coords: [61.0, 24.5], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 9, name: "Kallavesi", city: "Kuopio", coords: [62.9, 27.7], fish: ["Kuha", "Ahven", "Hauki", "Muikku"] },
    { id: 10, name: "Keitele", city: "Äänekoski", coords: [63.1, 26.2], fish: ["Taimen", "Kuha", "Ahven"] },

    { id: 11, name: "Puula", city: "Mikkeli", coords: [61.6, 26.6], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 12, name: "Konnevesi", city: "Konnevesi", coords: [62.6, 26.5], fish: ["Taimen", "Siika", "Ahven"] },
    { id: 13, name: "Kitkajärvi", city: "Kuusamo", coords: [66.3, 29.2], fish: ["Muikku", "Siika", "Taimen"] },
    { id: 14, name: "Kemijärvi", city: "Kemijärvi", coords: [66.7, 27.4], fish: ["Kuha", "Hauki", "Ahven"] },
    { id: 15, name: "Lokka", city: "Sodankylä", coords: [67.8, 27.2], fish: ["Hauki", "Ahven", "Made"] },
    { id: 16, name: "Porttipahta", city: "Sodankylä", coords: [67.5, 27.0], fish: ["Hauki", "Ahven", "Siika"] },

    { id: 17, name: "Lappajärvi", city: "Lappajärvi", coords: [63.2, 23.6], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 18, name: "Puruvesi", city: "Savonlinna", coords: [61.8, 29.3], fish: ["Muikku", "Siika", "Taimen"] },
    { id: 19, name: "Orivesi", city: "Savonlinna", coords: [62.0, 29.0], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 20, name: "Haukivesi", city: "Varkaus", coords: [62.3, 28.5], fish: ["Kuha", "Ahven", "Hauki"] },

    { id: 21, name: "Enonjärvi", city: "Lahti", coords: [61.0, 25.6], fish: ["Ahven", "Hauki"] },
    { id: 22, name: "Vesijärvi", city: "Lahti", coords: [61.0, 25.7], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 23, name: "Tuusulanjärvi", city: "Tuusula", coords: [60.4, 25.0], fish: ["Ahven", "Hauki"] },
    { id: 24, name: "Hiidenvesi", city: "Vihti", coords: [60.4, 24.3], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 25, name: "Lohjanjärvi", city: "Lohja", coords: [60.2, 24.1], fish: ["Kuha", "Ahven", "Hauki"] },

    { id: 26, name: "Pyhäjärvi", city: "Säkylä", coords: [61.0, 22.3], fish: ["Kuha", "Ahven"] },
    { id: 27, name: "Köyliönjärvi", city: "Kokemäki", coords: [61.1, 22.3], fish: ["Ahven", "Hauki"] },
    { id: 28, name: "Rautavesi", city: "Sastamala", coords: [61.3, 22.9], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 29, name: "Kulovesi", city: "Nokia", coords: [61.4, 23.2], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 30, name: "Pyhäselkä", city: "Joensuu", coords: [62.5, 29.7], fish: ["Kuha", "Ahven", "Hauki"] },

    { id: 31, name: "Höytiäinen", city: "Joensuu", coords: [62.7, 29.5], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 32, name: "Onkamo", city: "Tohmajärvi", coords: [62.2, 30.3], fish: ["Ahven", "Hauki"] },
    { id: 33, name: "Suvasvesi", city: "Leppävirta", coords: [62.5, 28.3], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 34, name: "Rikkavesi", city: "Kuopio", coords: [62.9, 28.0], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 35, name: "Unnukka", city: "Varkaus", coords: [62.3, 27.8], fish: ["Kuha", "Ahven"] },

    { id: 36, name: "Simojärvi", city: "Ranua", coords: [66.0, 26.5], fish: ["Ahven", "Hauki", "Siika"] },
    { id: 37, name: "Yli-Kitka", city: "Kuusamo", coords: [66.3, 29.4], fish: ["Siika", "Muikku", "Taimen"] },
    { id: 38, name: "Ounasjärvi", city: "Enontekiö", coords: [68.4, 23.6], fish: ["Harjus", "Taimen"] },
    { id: 39, name: "Kilpisjärvi", city: "Enontekiö", coords: [69.0, 20.8], fish: ["Rautu", "Taimen"] },
    { id: 40, name: "Pulmankijärvi", city: "Utsjoki", coords: [69.9, 28.1], fish: ["Harjus", "Taimen"] },

    { id: 41, name: "Koitere", city: "Ilomantsi", coords: [62.7, 30.8], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 42, name: "Pielavesi", city: "Pielavesi", coords: [63.2, 26.8], fish: ["Kuha", "Ahven"] },
    { id: 43, name: "Nilakka", city: "Keitele", coords: [63.0, 26.3], fish: ["Taimen", "Ahven"] },
    { id: 44, name: "Iijärvi", city: "Kuusamo", coords: [66.5, 29.0], fish: ["Ahven", "Hauki", "Siika"] },
    { id: 45, name: "Längelmävesi", city: "Orivesi", coords: [61.7, 24.4], fish: ["Kuha", "Ahven"] },

    { id: 46, name: "Roine", city: "Kangasala", coords: [61.5, 24.1], fish: ["Kuha", "Ahven"] },
    { id: 47, name: "Mallasvesi", city: "Pälkäne", coords: [61.3, 24.2], fish: ["Kuha", "Ahven"] },
    { id: 48, name: "Pyhävesi", city: "Kitee", coords: [62.1, 30.1], fish: ["Ahven", "Hauki"] },
    { id: 49, name: "Suolijärvi", city: "Tampere", coords: [61.5, 23.7], fish: ["Ahven", "Hauki"] },
    { id: 50, name: "Tohloppijärvi", city: "Tampere", coords: [61.5, 23.7], fish: ["Ahven", "Hauki"] },
    { id: 51, name: "Sääksjärvi", city: "Nurmijärvi", coords: [60.5, 24.7], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 52, name: "Kukkia", city: "Pälkäne", coords: [61.3, 24.5], fish: ["Ahven", "Hauki", "Kuha"] },
    { id: 53, name: "Juojärvi", city: "Heinävesi", coords: [62.8, 28.6], fish: ["Taimen", "Kuha", "Ahven"] },
    { id: 54, name: "Kolima", city: "Viitasaari", coords: [63.1, 25.9], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 55, name: "Kivijärvi", city: "Kivijärvi", coords: [63.1, 25.1], fish: ["Ahven", "Hauki", "Kuha"] },
    { id: 56, name: "Kuohijärvi", city: "Pälkäne", coords: [61.4, 24.6], fish: ["Ahven", "Hauki"] },
    { id: 57, name: "Kyrösjärvi", city: "Ikaalinen", coords: [61.8, 23.0], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 58, name: "Vahvajärvi", city: "Padasjoki", coords: [61.3, 25.0], fish: ["Ahven", "Hauki"] },
    { id: 59, name: "Isojärvi", city: "Kuhmoinen", coords: [61.8, 25.0], fish: ["Ahven", "Hauki", "Taimen"] },
    { id: 60, name: "Liesjärvi", city: "Tammela", coords: [60.8, 23.9], fish: ["Ahven", "Hauki"] },

    { id: 61, name: "Pielisjärvi", city: "Joensuu", coords: [62.6, 29.8], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 62, name: "Tarjanne", city: "Ruovesi", coords: [62.0, 23.7], fish: ["Kuha", "Ahven"] },
    { id: 63, name: "Ähtärinjärvi", city: "Ähtäri", coords: [62.6, 24.1], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 64, name: "Pääjärvi", city: "Hyvinkää", coords: [60.6, 24.8], fish: ["Ahven", "Hauki"] },
    { id: 65, name: "Lammasjärvi", city: "Kuhmo", coords: [64.1, 29.5], fish: ["Ahven", "Hauki"] },

    { id: 66, name: "Ontojärvi", city: "Kuhmo", coords: [64.3, 29.0], fish: ["Taimen", "Ahven"] },
    { id: 67, name: "Lentua", city: "Kuhmo", coords: [64.2, 29.3], fish: ["Taimen", "Ahven"] },
    { id: 68, name: "Siikajärvi", city: "Espoo", coords: [60.3, 24.6], fish: ["Ahven", "Hauki"] },
    { id: 69, name: "Bodomjärvi", city: "Espoo", coords: [60.3, 24.7], fish: ["Ahven", "Hauki"] },
    { id: 70, name: "Nuasjärvi", city: "Sotkamo", coords: [64.1, 28.4], fish: ["Kuha", "Ahven", "Hauki"] },

    { id: 71, name: "Jerisjärvi", city: "Muonio", coords: [67.9, 24.1], fish: ["Taimen", "Harjus"] },
    { id: 72, name: "Miekojärvi", city: "Pello", coords: [66.9, 24.9], fish: ["Hauki", "Ahven"] },
    { id: 73, name: "Alajärvi", city: "Alajärvi", coords: [63.0, 23.8], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 74, name: "Evijärvi", city: "Evijärvi", coords: [63.4, 23.5], fish: ["Ahven", "Hauki"] },
    { id: 75, name: "Keurusselkä", city: "Keuruu", coords: [62.3, 24.5], fish: ["Kuha", "Ahven"] },

    { id: 76, name: "Pihlajavesi", city: "Keuruu", coords: [62.0, 24.3], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 77, name: "Hankavesi", city: "Ähtäri", coords: [62.4, 24.2], fish: ["Ahven", "Hauki"] },
    { id: 78, name: "Karhijärvi", city: "Pori", coords: [61.4, 21.9], fish: ["Ahven", "Hauki"] },
    { id: 79, name: "Vehkajärvi", city: "Pälkäne", coords: [61.5, 24.6], fish: ["Ahven", "Hauki"] },
    { id: 80, name: "Kukkasjärvi", city: "Orivesi", coords: [60.9, 24.4], fish: ["Ahven"] },

    { id: 81, name: "Sorsavesi", city: "Suonenjoki", coords: [62.8, 27.5], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 82, name: "Suontee", city: "Joutsa", coords: [62.7, 26.7], fish: ["Kuha", "Ahven"] },
    { id: 83, name: "Kyyvesi", city: "Mikkeli", coords: [61.9, 26.4], fish: ["Kuha", "Ahven", "Hauki"] },
    { id: 84, name: "Nilijärvi", city: "Kuusamo", coords: [66.2, 28.9], fish: ["Taimen", "Ahven"] },
    { id: 85, name: "Vaskivesi", city: "Virrat", coords: [62.1, 23.8], fish: ["Kuha", "Ahven"] },

    { id: 86, name: "Palovesi", city: "Virrat", coords: [62.0, 23.9], fish: ["Kuha", "Ahven"] },
    { id: 87, name: "Kyrkösjärvi", city: "Seinäjoki", coords: [62.8, 22.8], fish: ["Ahven", "Hauki"] },
    { id: 88, name: "Lahnavesi", city: "Kuopio", coords: [62.6, 27.9], fish: ["Kuha", "Ahven"] },
    { id: 89, name: "Oijärvi", city: "Ii", coords: [65.9, 25.5], fish: ["Ahven", "Hauki"] },
    { id: 90, name: "Kuivasjärvi", city: "Oulu", coords: [64.7, 25.7], fish: ["Ahven", "Hauki"] },

    { id: 91, name: "Korpijärvi", city: "Jyväskylä", coords: [62.2, 27.0], fish: ["Kuha", "Ahven"] },
    { id: 92, name: "Suojärvi", city: "Ilomantsi", coords: [62.4, 30.5], fish: ["Taimen", "Ahven"] },
    { id: 93, name: "Nerosjärvi", city: "Kuopio", coords: [62.9, 27.2], fish: ["Kuha", "Ahven"] },
    { id: 94, name: "Valkeinen", city: "Kuopio", coords: [63.2, 27.1], fish: ["Ahven"] },
    { id: 95, name: "Saarijärvi", city: "Saarijärvi", coords: [62.7, 25.3], fish: ["Kuha", "Ahven", "Hauki"] }
];

export default function LocationsPage() {
    const [search, setSearch] = useState("");
    const [selectedLake, setSelectedLake] = useState(null);

    const filtered = lakes.filter(l =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <ClientNavbar />

            <div className="map-page">

                <h1 className="map-title">🗺️ Kalastus kartalla</h1>

                {/* SEARCH */}
                <motion.input
                    className="map-search"
                    placeholder="Etsi järveä tai kaupunkia..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    whileFocus={{ scale: 1.02 }}
                />

                {/* MAP */}
                <div className="map-container">
                    <MapContainer
                        center={[64.5, 26]}
                        zoom={5}
                        scrollWheelZoom={true}
                        className="leaflet-map"
                    >
                        <TileLayer
                            attribution='&copy; OpenStreetMap'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {filtered.map((lake) => (
                            <Marker key={lake.id} position={lake.coords}>
                                <Popup>
                                    <div
                                        className="popup-content"
                                        onClick={() => setSelectedLake(lake)}
                                    >
                                        <h3>{lake.name}</h3>
                                        <p><MapPin size={14} /> {lake.city}</p>
                                        <p>🐟 {lake.fish.join(", ")}</p>

                                        <small>Lue lisää klikkaamalla...</small>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
                <AnimatePresence>
                    {selectedLake && (
                        <motion.div
                            className="browse-modal-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedLake(null)}
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
                                    onClick={() => setSelectedLake(null)}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={24} />
                                </motion.button>

                                <h2>{selectedLake.name}</h2>

                                <p>
                                    <MapPin size={16} /> {selectedLake.city}
                                </p>

                                <h3>Kalalajit</h3>

                                <ul>
                                    {selectedLake.fish.map((fish) => (
                                        <li key={fish}>{fish}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import "./Locations.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
    { id: 50, name: "Tohloppijärvi", city: "Tampere", coords: [61.5, 23.7], fish: ["Ahven", "Hauki"] }
];

export default function LocationsPage() {
    const [search, setSearch] = useState("");

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
                                    <div className="popup-content">
                                        <h3>{lake.name}</h3>
                                        <p><MapPin size={14} /> {lake.city}</p>
                                        <p>🐟 {lake.fish.join(", ")}</p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

            </div>
        </>
    );
}
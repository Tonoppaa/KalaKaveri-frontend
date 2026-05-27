import ClientNavbar from "../../Components/ClientNavbar/ClientNavbar";

import "./ClientCompetitionsPage.css";

import { useState } from "react";

import { motion } from "framer-motion";

import { Trophy } from "lucide-react";

import CompetitionCard from "../../Components/CompetitionsCard/CompetitionsCard.jsx";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

// FIX LEAFLET ICONS

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// STATIC DATA

const competitions = [

    {
        id: 1,
        title: "Predator Masters",
        city: "Lahti",
        lake: "Päijänne",
        coords: [61.5, 25.5],
        fish: ["Hauki", "Kuha"],
        type: "Joukkue",
        teamSize: "2 henkilöä",
        start: "1.6.2026",
        end: "3.6.2026"
    },

    {
        id: 2,
        title: "Street Fishing Cup",
        city: "Tampere",
        lake: "Pyhäjärvi",
        coords: [61.4, 23.6],
        fish: ["Ahven"],
        type: "Henkilökohtainen",
        teamSize: "Solo",
        start: "10.7.2026",
        end: "10.7.2026"
    },

    {
        id: 3,
        title: "Kuha Challenge",
        city: "Kuopio",
        lake: "Kallavesi",
        coords: [62.9, 27.7],
        fish: ["Kuha"],
        type: "Joukkue",
        teamSize: "3 henkilöä",
        start: "15.8.2026",
        end: "17.8.2026"
    },

    {
        id: 4,
        title: "Hauki Open",
        city: "Joensuu",
        lake: "Pyhäselkä",
        coords: [62.5, 29.7],
        fish: ["Hauki"],
        type: "Henkilökohtainen",
        teamSize: "Solo",
        start: "5.9.2026",
        end: "6.9.2026"
    }

];

export default function CompetitionsPage() {

    const [search, setSearch] = useState("");

    // FILTER

    const filteredCompetitions = competitions.filter((competition) =>

        competition.title.toLowerCase().includes(search.toLowerCase()) ||

        competition.city.toLowerCase().includes(search.toLowerCase()) ||

        competition.fish.join(" ").toLowerCase().includes(search.toLowerCase())
    );

    return (

        <>
            <ClientNavbar />

            <div className="competition-page">

                {/* HERO */}

                <motion.div
                    className="competition-hero"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >

                    <h1>
                        <Trophy />
                        Kalastuskilpailut Suomessa
                    </h1>

                    <p>
                        Löydä kilpailut helposti kaupungin tai kalalajin mukaan
                    </p>

                </motion.div>

                {/* SEARCH */}

                <motion.input
                    className="competition-search"
                    placeholder="Etsi kilpailua, kaupunkia tai kalaa..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    whileFocus={{ scale: 1.01 }}
                />

                {/* MAP */}

                <div className="competition-map-wrapper">

                    <MapContainer
                        center={[64.5, 26]}
                        zoom={5}
                        scrollWheelZoom={true}
                        className="competition-map"
                    >

                        <TileLayer
                            attribution='&copy; OpenStreetMap'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {filteredCompetitions.map((competition) => (

                            <Marker
                                key={competition.id}
                                position={competition.coords}
                            >

                                <Popup>

                                    <div className="popup-content">

                                        <h3>
                                            {competition.title}
                                        </h3>

                                        <p>
                                            📍 {competition.city}
                                        </p>

                                        <p>
                                            🐟 {competition.fish.join(", ")}
                                        </p>

                                    </div>

                                </Popup>

                            </Marker>

                        ))}

                    </MapContainer>

                </div>

                {/* GRID */}

                <div className="competition-grid">

                    {filteredCompetitions.map((competition) => (

                        <CompetitionCard
                            key={competition.id}
                            competition={competition}
                        />

                    ))}

                </div>

            </div>
        </>
    );
}
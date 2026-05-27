import "./CompetitionsCard.css";

import { motion } from "framer-motion";

import {
    MapPin,
    Fish,
    Users,
    CalendarDays
} from "lucide-react";

import {
    Card,
    CardContent
} from "../UI/Card";

export default function CompetitionsCard({ competition }) {

    return (

        <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >

            <Card className="competition-card">

                <CardContent>

                    {/* TITLE */}
                    <div className="competition-header">

                        <h2>{competition.title}</h2>

                        <span className="competition-badge">
                            {competition.type}
                        </span>

                    </div>

                    {/* INFO */}
                    <div className="competition-info">

                        <div>
                            <MapPin size={16} />
                            <span>
                                {competition.city} • {competition.lake}
                            </span>
                        </div>

                        <div>
                            <Fish size={16} />
                            <span>
                                {competition.fish.join(", ")}
                            </span>
                        </div>

                        <div>
                            <Users size={16} />
                            <span>
                                {competition.teamSize}
                            </span>
                        </div>

                        <div>
                            <CalendarDays size={16} />
                            <span>
                                {competition.start} - {competition.end}
                            </span>
                        </div>

                    </div>

                </CardContent>

            </Card>

        </motion.div>
    );
}
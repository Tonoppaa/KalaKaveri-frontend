import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { month: "Tammi", catches: 2 },
    { month: "Helmi", catches: 4 },
    { month: "Maalis", catches: 3 },
    { month: "Huhti", catches: 6 },
    { month: "Touko", catches: 8 },
    { month: "Kesä", catches: 12 },
];

export default function CatchChart() {
    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="catches" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
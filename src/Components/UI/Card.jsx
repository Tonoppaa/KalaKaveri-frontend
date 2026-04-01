// src/Components/UI/Card.jsx
export function Card({ children, className = "" }) {
    return (
        <div
            className={`card ${className}`}
            style={{
                maxWidth: "400px",
                width: "100%",
                margin: "1rem auto",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                overflow: "hidden",
            }}
        >
            {children}
        </div>
    );
}

export function CardContent({ children, className = "" }) {
    return <div className={`card-content ${className}`} style={{ padding: "0.5rem 0" }}>{children}</div>;
}
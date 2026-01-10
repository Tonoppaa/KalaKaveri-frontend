import ClientNavbar from "../ClientNavbar/ClientNavbar";
import { Card } from "react-bootstrap";
import "../ClientNavbar/ClientNavbar.css";

function ClientFrontPage() {
    return (
        <>
            <ClientNavbar />
            <div className="frontpage-content">
                <h1>Tervetuloa takaisin Kalakaveriin, -kirjautunutkäyttäjä-!</h1>
            </div>
            <div>
                <Card className="mx-auto my-4 p-3 shadow" style={{ maxWidth: "1050px", borderRadius: "15px", minHeight: "300px" }}>
                    <Card.Body>
                        <Card.Title>Viimeaikainen toiminta</Card.Title>
                        <Card.Text>
                            17.11.2025 23:23: Lisäsit saaliin (Kalan nimi, pyyntipaikka)
                        </Card.Text>
                        <Card.Link href="#">Linkki saaliseen</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ClientFrontPage;
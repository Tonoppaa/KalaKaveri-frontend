import ClientNavbar from "../ClientNavbar/ClientNavbar";
import { Card } from "react-bootstrap";
import "../ClientNavbar/ClientNavbar.css";
import "./ClientFrontPage.css";

function ClientFrontPage() {
    return (
        <>
            <ClientNavbar />
            <div className="frontpage-content">
                <h1>Tervetuloa takaisin Kalakaveriin, -kirjautunutkäyttäjä-!</h1>
            </div>
            <div className="cards-row">
                <Card className="my-4 p-3 shadow card-wide">
                    <Card.Body>
                        <Card.Title>Viimeaikainen toiminta</Card.Title>
                        <Card.Text>
                            17.11.2025 23:23: Lisäsit saaliin (Kalan nimi, pyyntipaikka)
                        </Card.Text>
                        <Card.Link href="#">Linkki saaliseen</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="my-4 p-3 shadow card-narrow">
                    <Card.Body>
                        <Card.Title>Viimeaikaiset saavutukset</Card.Title>
                        <Card.Text>
                            24.02.2026 22:50: Saavutit: Pyydystit (Kalan nimi).
                        </Card.Text>
                        <Card.Link href="#">Linkki saavutukseen</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ClientFrontPage;
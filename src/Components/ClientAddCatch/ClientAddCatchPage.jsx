import ClientNavbar from "../ClientNavbar/ClientNavbar";
import "../ClientNavbar/ClientNavbar.css";
import "./ClientAddCatchPage.css";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

function ClientAddCatchPage() {
    return (
        <>
            <ClientNavbar />

            <div className="addcatch-content text-center mt-2">
                <h1 className="fw-bold">🎣 Kirjaa uusi saalis</h1>
            </div>

            <Card className="catch-card mx-auto my-4 p-4">
                <Card.Body>
                    <Form>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Kalalaji</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Esim. Ahven" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Pituus (cm)</Form.Label>
                                    <Form.Control className="custom-input" type="number" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Paino (kg)</Form.Label>
                                    <Form.Control className="custom-input" type="number" step="0.01" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Päivämäärä</Form.Label>
                                    <Form.Control className="custom-input" type="date" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Paikka</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Järvi / kaupunki" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Sää</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Aurinkoinen, pilvinen..." />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Väline</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Esim. virveli" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Viehe</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Esim. vaappu" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Lisää kuva</Form.Label>
                                    <Form.Control className="custom-input" type="file" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-4">
                            <Form.Label>Lisätiedot</Form.Label>
                            <Form.Control className="custom-input" as="textarea" rows={3} placeholder="Kuvaile saalista..." />
                        </Form.Group>

                        <div className="d-flex justify-content-between mt-4">
                            <Button className="save-btn">💾 Tallenna saalis</Button>
                            <Button className="cancel-btn">Peruuta</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default ClientAddCatchPage;
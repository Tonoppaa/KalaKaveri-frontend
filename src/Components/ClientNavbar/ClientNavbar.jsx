import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './ClientNavbar.css';

function ClientNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img className="logo" src="images/kalakaveri-logo-fish.png" alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link as={NavLink} to="/clientfrontpage" className="me-5">
                            Etusivu
                        </Nav.Link>

                        <NavDropdown title="Omat saaliit" className="me-5">
                            <NavDropdown.Item as={NavLink} to="/add-catch">Kirjaa saalis</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/view-catch">Tarkastele saalis</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/delete-catch">Poista saalis</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to="/locations" className="me-5">
                            Kalastuspaikat
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/fishbank" className="me-5">
                            Kalapankki
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/achievements" className="me-5">
                            Saavutukset
                        </Nav.Link>

                    </Nav>

                    <Navbar.Text className="loggeduser-text">
                        Tommi Kalliopuska
                    </Navbar.Text>

                    <img className="logged-user-logo" src="images/logged-user.png" alt="Logged-user" />

                    <Nav>
                        <Nav.Link
                            className="logout-text ms-4"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const confirmLogout = window.confirm("Haluatko varmasti kirjautua ulos?");
                                if (confirmLogout) {
                                    console.log("Käyttäjä kirjautui ulos");
                                }
                            }}>
                            Kirjaudu ulos
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ClientNavbar;
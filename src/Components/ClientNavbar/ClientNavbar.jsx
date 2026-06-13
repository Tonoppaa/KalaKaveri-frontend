import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './ClientNavbar.css';

function ClientNavbar() {

    // ✅ MUST be inside component
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand>
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
                                <NavDropdown.Item as={NavLink} to="/browse-catch">Tarkastele saalis</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/remove-catch">Poista saalis</NavDropdown.Item>
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

                            <Nav.Link as={NavLink} to="/competitions" className="me-5">
                                Kilpailut
                            </Nav.Link>

                        </Nav>

                        <Navbar.Text className="loggeduser-text">
                            <NavLink to="/personal-info" className="loggeduser-link">
                                Tommi Kalliopuska
                            </NavLink>
                        </Navbar.Text>

                        <img className="logged-user-logo" src="images/logged-user.png" alt="Logged-user" />

                        <Nav>
                            <Nav.Link
                                className="logout-text ms-4"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowLogoutModal(true);
                                }}
                            >
                                Kirjaudu ulos
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ✅ MODAL OUTSIDE NAVBAR */}
            <AnimatePresence>
                {showLogoutModal && (
                    <motion.div
                        className="logout-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowLogoutModal(false)}
                    >
                        <motion.div
                            className="logout-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2>Kirjaudu ulos</h2>
                            <p>Haluatko varmasti kirjautua ulos?</p>

                            <div className="logout-buttons">
                                <button
                                    className="logout-confirm"
                                    onClick={() => {
                                        console.log("Käyttäjä kirjautui ulos");
                                        setShowLogoutModal(false);
                                    }}
                                >
                                    Kyllä
                                </button>

                                <button
                                    className="logout-cancel"
                                    onClick={() => setShowLogoutModal(false)}
                                >
                                    Peruuta
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default ClientNavbar;
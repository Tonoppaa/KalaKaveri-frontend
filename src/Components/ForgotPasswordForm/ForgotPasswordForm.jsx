import './ForgotPasswordForm.css';
import bgVideo from '../../Assets/login-background.mp4';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ForgotPasswordForm() {
    return (
        <div className="form-container">
            <video
                className="bg-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <Form className="form-content">
                <h1>Palauta salasana</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sähköpostiosoite</Form.Label>
                    <Form.Control type="email" placeholder="Kirjoita sähköpostiosoite" />
                    <Form.Text className="text-muted">
                        Me emme koskaan jaa sähköpostiasi kenellekään.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Palauta salasana
                </Button>
            </Form>
        </div>
    );
}

export default ForgotPasswordForm;
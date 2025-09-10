import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
        <footer className="footer-section mt-5 ">
            <Container>
                <Row className="align-items-center py-4">
                    <Col md={6}>
                        <h5 className="mb-0">Stay Updated</h5>
                        <p>Get the latest updates on manufacturing trends, supplier insights, and platform features.</p>
                    </Col>
                    <Col md={6}>
                        <Form className="d-flex">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="me-2"
                            />
                            <Button className="gradient-btn text-center fw-bolder px-4" variant="primary">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row className="gy-4">
                    <Col xs={12} md={3} className="mb-4">
                        <img src="src/assets/logo.png" alt="Logo" style={{ width: "120px" }} />
                        <p className="mt-3">
                            Connecting manufacturers and buyers globally through our comprehensive
                            platform and verified supplier network.
                        </p>
                        <p className="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cc5500" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg> info@meshworks.com
                        </p>
                        <p className="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cc5500" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg> +91-2049332387
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cc5500" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg> 625 Bear Run Lane, Lewis Center, Ohio 43035
                        </p>
                    </Col>  
                    <Col xs={6} sm={4} md={2} className="mb-4">
                        <h6 className="footer-head">Navigation</h6>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-4">
                        <h6 className="footer-head">Products</h6>
                        <ul className="footer-links">
                            <li><a href="#">MESH sourcing</a></li>
                            <li><a href="#">Supplier</a></li>
                            <li><a href="#">Quality</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-4">
                        <h6 className="footer-head">Resources</h6>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Partnership</a></li>
                            <li><a href="#">What's New</a></li>
                            <li><a href="#">Book a Demo</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-4">
                        <h6 className="footer-head">Legal & Security</h6>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={1} className="mb-4 text-center">
                        <img src="src/assets/tuv.png" alt="TÜV Certified" style={{ width: "100px" }} />
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;

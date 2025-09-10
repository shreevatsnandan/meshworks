import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Banner() {
    return (
        <div className="banner-section">
            <Container className="text-center py-5">
                <h1 className="banner-heading">
                    <span className="text-black">MESH Works</span> <span className="text-orange">Partner Programs</span>
                </h1>
                <p className="banner-subheading">
                    We partner with large manufacturing organizations like OEMs & Tier 1s as well as consulting companies who work with small & midsize manufacturers. MESH Works can help you build new revenue streams, increase market size & collaborate with experts.
                </p>
                <Row className="justify-content-center mt-4">
                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card className="banner-card shadow-lg p-2 rounded-xl h-100">
                            <Card.Img
                                variant="top"
                                src="src/assets/app_eg.png"
                                style={{ width: '50px', margin: '10px auto 0px auto', borderRadius: '20px' }}
                            />
                            <Card.Body className="text-center">
                                <Card.Title>Revenue Growth</Card.Title>
                                <Card.Text>Build new revenue streams</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card className="banner-card shadow-lg p-2 rounded h-100">
                            <Card.Img
                                variant="top"
                                src="src/assets/app_eg.png"
                                style={{ width: '50px', margin: '10px auto 0px auto', borderRadius: '20px' }}
                            />
                            <Card.Body className="text-center">
                                <Card.Title>Market Expansion</Card.Title>
                                <Card.Text>Increase market size</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card className="banner-card shadow-lg p-2 rounded h-100">
                            <Card.Img
                                variant="top"
                                src="src/assets/app_eg.png"
                                style={{ width: '50px', margin: '10px auto 0px auto', borderRadius: '20px' }}
                            />
                            <Card.Body className="text-center">
                                <Card.Title>Technology Access</Card.Title>
                                <Card.Text>Cutting-edge platform access</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Banner;

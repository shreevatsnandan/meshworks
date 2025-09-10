import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Program() {
    return (
        <div className="features-section py-5">
            <Container>
                <h2 className="text-center fw-bolder mb-1">
                    <span className="text-black">Partner </span>{' '}
                    <span className="text-darkorange">Program Types</span>
                </h2>
                <p className="text-center mb-5 text-muted">
                    Choose the partnership model that best fits your business and unlock new opportunities
                </p>
                <Row className="g-4">
                    <Col md={4}>
                            <Card className="feature-card h-100 shadow-sm p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={`src/assets/icon_hotel.png`} 
                                        alt="logo"
                                        style={{ width: '55px', height: '55px', marginRight: '10px', borderRadius: '10px' }}
                                    />
                                    <div className="logohead">  
                                        <span className="feature-label feature-blue">Reseller Partners</span>
                                        <h5 className="fw-bolder mt-2  mb-0">Reseller Partners</h5>
                                    </div>
                                </div>
                                <p>
                                    For: Consulting companies who work with procurement, sourcing, new product development & quality departments for manufacturing organizations
                                </p>
                                <h6>Key Benefits:</h6>
                                <ul>
                                    <li>Build new revenue streams</li>
                                    <li>Expand service offerings</li>
                                    <li>Access to sales and marketing resources</li>
                                    <li>Technical training and certification</li>
                                    <li>Competitive partner pricing</li>
                                </ul>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="feature-card h-100 shadow-sm p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={`src/assets/icon_shake.png`}
                                        alt="logo"
                                        style={{ width: '55px', height: '55px', marginRight: '10px', borderRadius: '10px' }}
                                    />
                                    <div className="logohead">
                                        <span className="feature-label feature-green">Affiliate Partners</span>
                                        <h5 className="fw-bolder mt-2  mb-0">Affiliate Partners</h5>
                                    </div>
                                </div>
                                <p>
                                    For: Consulting companies who work with buyers or suppliers
                                </p>
                                <h6 className='font-bold'>Key Benefits:</h6>
                                <ul>
                                    <li>Co-marketing opportunities</li>
                                    <li>Commission-based revenue model</li>
                                    <li>Lead sharing programs</li>
                                    <li>Partner portal access</li>
                                    <li>Performance incentives</li>
                                </ul>
                            </Card>
                        </Col>
                        
                        <Col md={4}>
                            <Card className="feature-card h-100 shadow-sm p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={`src/assets/medal_icon.png`}
                                        alt="logo"
                                        style={{ width: '55px', height: '55px', marginRight: '10px', borderRadius: '10px' }}
                                    />
                                    <div className="logohead">
                                        <span className="feature-label feature-red">Supplier Development Partners</span>
                                        <h5 className="fw-bolder mt-2  mb-0">Supplier Development Partners</h5>
                                    </div>
                                </div>
                                <p>
                                    For: OEM's & Tier 1 companies who would like their suppliers to implement digital tools to improve product development visibility & project management operations
                                </p>
                                <h6>Key Benefits:</h6>
                                <ul>
                                    <li>Collaborative market expansion</li>
                                    <li>Joint solution development</li>
                                    <li>Shared expertise and resources</li>
                                    <li>Strategic partnership agreements</li>
                                    <li>Innovation acceleration</li>
                                </ul>
                            </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Program;

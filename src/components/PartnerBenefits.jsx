import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PartnerBenefits() {
  return (
    <div className="partner-benefits-section py-5">
      <Container>
        <h2 className="mb-2 text-center fw-bolder">
          Partner <span className="text-darkorange">Benefits</span>
        </h2>
        <p className="text-muted text-center mb-4">
          Unlock exclusive advantages when you collaborate with us.
        </p>
        <Row>
          <Col md={12}>
            <Card className="benefit-card feature-card p-5 shadow-sm">
              <h4 className="mb-4 text-center fw-bolder">Partner Benefits</h4>
              <Row>
                <Col md={6}>
                  <ul>
                    <li>Access to global supplier network</li>
                    <li>Co-marketing opportunities</li>
                    <li>Technical training and support</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul>
                    <li>Revenue sharing programs</li>
                    <li>Priority partner support</li>
                    <li>Joint solution development</li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button className="gradient-btn">
            Book a Partnership Call
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default PartnerBenefits;

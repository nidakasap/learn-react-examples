import React from "react";
import data from "../data.js";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CourseCard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        {data.map(({ img, name, text, id }) => {
          //!arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz
          //?database den çekilen veriler ekrana bastırılırken, en dış div unique bir veri ister bunu da key={id} şeklinde yazarız. id olmak zorunda değil unique herhangi bir property olabilir, mesela img

          return (
            <Col
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              // react-bootstrap responsivliği
              // sm={12}
              // md={6}
              // lg={4}
              key={id}
            >
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button
                    variant="info"
                    onClick={() => navigate(`/courses/${name}`)}
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;

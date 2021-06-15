import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const TeamsSection = () => {
  const Teams = [
    { link: "#", image: "/A-Test/images/logos/shopify.png" },
    { link: "#", image: "/A-Test/images/logos/amazon.png" },
    { link: "#", image: "/A-Test/images/logos/yahoo.png" },
    { link: "#", image: "/A-Test/images/logos/Zencart.png" },
    { link: "#", image: "/A-Test/images/logos/Ebay.png" },
    { link: "#", image: "/A-Test/images/logos/ProStores.png" },
    { link: "#", image: "/A-Test/images/logos/v.png" },
    { link: "#", image: "/A-Test/images/logos/volusion.png" },
  ];
  return (
    <section className="team">
      <Container>
        <p className="m-4">
          Integrate playthem with your favorite eCommerce stack
        </p>
        <Row className="p-3">
          {Teams.map((t, i) => (
            <Col md={3} className="mt-4" key={i}>
              <a href={t.link}>
                <img src={`${t.image}`} alt="" width="150" />
              </a>
            </Col>
          ))}
        </Row>{" "}
      </Container>
    </section>
  );
};

export default TeamsSection;

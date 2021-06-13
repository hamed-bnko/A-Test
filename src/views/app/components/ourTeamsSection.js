import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const TeamsSection = () => {
  const Teams = [
    { link: "#", image: "/images/logos/shopify.png" },
    { link: "#", image: "/images/logos/amazon.png" },
    { link: "#", image: "/images/logos/yahoo.png" },
    { link: "#", image: "/images/logos/Zencart.png" },
    { link: "#", image: "/images/logos/Ebay.png" },
    { link: "#", image: "/images/logos/ProStores.png" },
    { link: "#", image: "/images/logos/v.png" },
    { link: "#", image: "/images/logos/volusion.png" },
  ];
  return (
    <section className="team">
      <Container>
        <p className="m-4">
          Integrate playthem with your favorite eCommerce stack
        </p>
        <Row className="p-3">
          {Teams &&
            Teams.map((t) => (
              <Col md={3} className="mt-4">
                <a href={t.link}>
                  <img src={t.image} alt="" width="150" />
                </a>
              </Col>
            ))}
        </Row>{" "}
      </Container>
    </section>
  );
};

export default TeamsSection;

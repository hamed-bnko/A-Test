import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import pic from "../../../images/Frame.png";
const GamesSection = () => {
  const games = [
    { text: "PLAYTHEM Games", image: { pic }, selected: true },
    { text: "PLAYTHEM Games", image: { pic } },
    { text: "PLAYTHEM Games", image: { pic } },
    { text: "PLAYTHEM Games", image: { pic } },
  ];
  return (
    <section className="games text-center">
      <h3 className="m-4">playthem Games</h3>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat
        cupidatat non proident
      </p>
      <Row>
        {games.map((game, i) => (
          <Col md={3} key={i}>
            <div className="card">
              <div className="card__img">
                <img src={pic} alt="" />
              </div>
              <p className="card__desc text-center">{game.text}</p>
              <Button
                variant={game && game.selected ? "primary" : "outline-primary"}
              >
                Primary
              </Button>{" "}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default GamesSection;

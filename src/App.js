import React, { useEffect, useState } from "react";
import "./App.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  const targetDate = new Date("2024-08-15T23:59:59"); // Set your target date here

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(timeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const carouselItems = [
    "For the wrath within",
    `${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${timeLeft.minutes || 0}m ${
      timeLeft.seconds || 0
    }s`,
  ];

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Row className="justify-content-center text-center align-items-center">
        <Col>
          <Carousel indicators={false} controls={false} interval={3000}>
            <Carousel.Item>
              <img
                className="navBarLogo m-auto"
                src={require("./assets/images/LogoBase.png")}
                alt="dns_logo"
              />
            </Carousel.Item>
            {carouselItems.map((text, index) => (
              <Carousel.Item key={index}>
                <h3>{text}</h3>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

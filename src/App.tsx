import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Navbar } from "react-bootstrap";
import dummyHero from "./images/dummy_hero.jpg";

const App = () => {
  const appStyle = {};
  return (
    <div style={appStyle}>
      <NavBar />
      <Hero />
    </div>
  );
};

const Hero = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${dummyHero})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "0",
        paddingTop: "70%",
      }}
    ></Container>
  );
};

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Attest</Navbar.Brand>
    </Container>
  </Navbar>
);

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <NavBar />
      <Hero />
    </Container>
  );
};

const Hero = () => <Container>Hero Image!</Container>;
const NavBar = () => <Container>Nav Bar!</Container>;

export default App;

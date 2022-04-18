import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card } from 'reactstrap';
import Container from "../container/container";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className="navbar">
      <Button>buuton</Button>
      <Container>
        <h1>navbar</h1>
      </Container>
    </div>
  );
}

export default Navbar;
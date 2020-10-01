import React from "react";
import NavBar from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg p-4",
  children,
}) => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="jumbotron">
          <h2>{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>

        {/* <footer className="footer bg mt-auto py-3">
          <div className="container-fluid bg-success text-white text-center py-3">
            <h4>If you got any questions, feel free to reach out!</h4>
            <button className="btn btn-warning btn-lg">Contact Us</button>
          </div>
          <div className="container">
            <span className="text-muted">
              An amazing <span className="text-white">MERN</span> bootcamp{" "}
            </span>
          </div>
        </footer> */}

        <footer className="page-footer text-center text-md-left">
          <Container>
            <Row>
              <Col className="text-center py-3">
                Copyright &copy; OreoFashion
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
};
export default Base;

import React from "react";
import NavBar from "./NavBar";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg text-white p-4",
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

        <footer class="page-footer text-center text-md-left pt-4">
          <hr />

          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <h5 class="text-uppercase font-weight-bold mb-4">
                  Footer Content
                </h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 mx-auto">
                <h5 class="text-uppercase font-weight-bold mb-4">Links</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 mx-auto">
                <h5 class="text-uppercase font-weight-bold mb-4">Links</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 mx-auto">
                <h5 class="text-uppercase font-weight-bold mb-4">Links</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Base;

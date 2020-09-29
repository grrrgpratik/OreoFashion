import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";

const UserDashBoard = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  // const adminLeftSide = () => {
  //   return <div className="card"></div>;
  // };
  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span>
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span>
            {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-warning">User Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcom to user area"
      description="Manage all of your details here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-12">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashBoard;

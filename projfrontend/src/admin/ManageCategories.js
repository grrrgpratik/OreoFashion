import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { deleteCategory, getAllCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base title="Welcom admin" description="Manage products here">
      <h2 className="mb-4">All Categories: </h2>
      <Link className="btn btn-info" to="/admin/dashboard">
        <span>Admin Home</span>
      </Link>

      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">
            Total {categories.length} products
          </h2>

          {categories.map((category, index) => {
            return (
              <div key={index} className="row text-center mb-2">
                <div className="col-4">
                  <h3 className="text-white text-left">{category.name}</h3>
                </div>

                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/categories/update/${category._id}`}
                  >
                    <span>Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteThisCategory(category._id);
                    }}
                  >
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;

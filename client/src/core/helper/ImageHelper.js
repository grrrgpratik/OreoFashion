import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.pexels.com/photos/3532560/pexels-photo-3532560.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  return (
    <div className="product-img">
      <img
        src={imageurl}
        alt={product.name}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};
export default ImageHelper;

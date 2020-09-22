const express = require("express");
const router = express.Router();

const { isAuthenticated, isAdmin, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const {
  getProductById,
  getProduct,
  createProduct,
  photo,
  removeProduct,
  updateProduct,
  getAllProduct,
  getAllUniqueCategories,
} = require("../controllers/product");

router.param("productId", getProductById);
router.param("userId", getUserById);

router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//udpate
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

//delete
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeProduct
);

//listing route
router.get("/products", getAllProduct);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;

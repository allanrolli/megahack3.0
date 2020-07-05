const express = require("express");
const cors = require("cors");
const User = require("./controllers/UserController");
const Restaurant = require("./controllers/RestaurantController");
const Park = require("./controllers/ParkController");
const Payment = require("./controllers/PaymentController");
const router = express.Router();

router.use(cors());

router.get("/sms", User.create);
router.get("/authenticate", User.authenticate);
router.get("/restaurant", Restaurant.restaurantIndex);
router.get("/menu", Restaurant.menuIndex);
router.get("/park", Park.parkIndex);
router.get("/payment", Payment.create);

router.get("/", (req, res) => {
  return res.send("Bem Vindo ao Reserv");
});

module.exports = router;

const express = require("express");
const authMiddleware = require("../auth/authentication");
const {
  // getAllBooking,
  // getBookingById,
  getCarAvailability,
  createBooking,
  //updateBooking,
  cancelBooking,
  newOrder,
} = require("../controllers/bookingController");
const router = express.Router();

// router.get("/", getAllBooking);
// router.get("/:id", getBookingById);
router.get("/carAvailability", authMiddleware, getCarAvailability);
router.post("/NewBooking", authMiddleware, createBooking);
//router.put("/:id", updateBooking);
router.put("/CancelBooking", authMiddleware, cancelBooking);
router.post("/NewOrder", newOrder); //New booking endpoint from Webhooks mauriconnect website

module.exports = router;

const express = require("express");
const Sweet = require("../models/Sweet");
const auth = require("../middleware/auth.middleware");
const admin = require("../middleware/admin.middleware");

const router = express.Router();

// Add Sweet
router.post("/", auth, async (req, res) => {
  const sweet = new Sweet(req.body);
  await sweet.save();
  res.json(sweet);
});

// Get All Sweets
router.get("/", auth, async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
});

// Delete Sweet (Admin only)
router.delete("/:id", auth, admin, async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: "Sweet deleted" });
});

module.exports = router;

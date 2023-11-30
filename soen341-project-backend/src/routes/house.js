const router = require("express").Router();
const multer = require("multer");
const upload = multer(); // Use multer for handling file uploads

const House = require("../models/house");

// Middleware to handle file upload
const uploadMiddleware = upload.single("Image");

router.post("/add", uploadMiddleware, async (req, res) => {
  const { Type, City, Price, BrokerId } = req.body;
  const house = new House({
    Type,
    City,
    Price,
    Image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
    BrokerId
  });

  try {
    await house.save();
    console.log(house.Price);
    res.send(true);
  } catch (error) {
    console.error("Failed to save the house:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/get", async (req, res) => {
  const houses = await House.find();
  if (!houses) {
    return res.status(204).json({ message: "no house is found" });
  }
  res.json(houses);
});

// ... other routes

module.exports = router;

const House = require("../models/house");

const router = require("express").Router();

router.post("/add", async (req, res) => {
  const house = new House(req.body);
  await house.save();
  console.log(house);
  res.send(true);
});

router.get("/get", async (req, res) => {
  const houses = await House.find();
  if (!houses) {
    return res.status(204).json({ message: "no house is found" });
  }
  res.json(houses);
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedHouse = await House.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedHouse) {
      return res.status(404).json({ message: "House not found" });
    }
    res.json(updatedHouse);
  } catch (error) {
    console.error("Failed to update the listing:", error);
    res.status(500).json({ error: "Update failed" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHouse = await House.findByIdAndDelete(id);
    if (!deletedHouse) {
      return res.status(404).json({ message: "House not found" });
    }
    res.json({ message: "House deleted successfully" });
  } catch (error) {
    console.error("Failed to delete the listing:", error);
    res.status(500).json({ error: "Deletion failed" });
  }
});

module.exports = router;


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

module.exports = router;
/* 
hehe
*/

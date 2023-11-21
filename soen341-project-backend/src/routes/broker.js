const Broker = require("../models/broker");

const router = require("express").Router();

router.post("/add", async (req, res) => {
  const broker = new Broker(req.body);
  await broker.save();
  console.log(broker);
  res.send(true);
});

router.get("/get", async (req, res) => {
  const brokers = await Broker.find();
  if (!brokers) {
    return res.status(204).json({ message: "no broker is found" });
  }
  res.json(brokers);
});



module.exports = router;

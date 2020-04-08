let express = require("express");
let router = express.Router();
let Register = require("../Model/registerModel");

router.post("/register", async (req, res) => {
  let newRegister = new Register({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    age: req.body.age,
    State: req.body.State,
    address: req.body.address,
    subscribe: req.body.subscribe
  });

  let data = await newRegister.save();
  console.log(data);
  res.send({ message: "thank you", d: data });
});
module.exports = router;

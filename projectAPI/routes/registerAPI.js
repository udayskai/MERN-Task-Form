let express = require("express");
let router = express.Router();
let Register = require("../Model/registerModel");
let multer = require("multer");
let port = "http://localhost:4600/";

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

let filefilter = function(req, file, cb) {
  if (
    (file.mimetype = "img/png") ||
    (file.mimetype = "img/jpg") ||
    (file.mimetype = "img/jpeg")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploads = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: filefilter
});
router.post("/register", uploads.single("image"), async (req, res) => {
  let newRegister = new Register({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    age: req.body.age,
    State: req.body.State,
    address: req.body.address,
    subscribe: req.body.subscribe,
    tagsArray: [req.body.tagsArray],
    image: port + "/uploads/" + req.body.filename
  });

  let data = await newRegister.save();
  console.log(data);
  res.send({ message: "thank you", d: data });
});
module.exports = router;

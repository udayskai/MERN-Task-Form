let mongoose = require("mongoose");
let express = require("express");
let app = express();
let port = process.env.port || 4600;
let register = require("./routes/registerAPI");

app.use(express.json());

//connection
mongoose
  .connect("mongodb://localhost/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connected to db`))
  .catch(error => console.log(`something went wrong ${error.message}`));
app.listen(port, () => console.log(`connected to port`));

app.use("/api", register);

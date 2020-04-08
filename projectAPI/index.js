let mongoose = require("mongoose");

//connection
mongoose
  .connect("mongodb://localhost/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connected to db`))
  .catch(error => console.log(`something went wrong ${error.message}`));

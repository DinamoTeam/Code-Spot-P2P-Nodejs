const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connectToDb = require('./db/mongoose');
require("dotenv").config({ path: "./config/config.env" });

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./routes/values"));
app.use(require("./routes/utilities"));
app.use(require("./routes/turnservertoken"));
app.use(require("./routes/rooms"));

app.get('/', async (req, res) => {
  res.json({
    message: "Server is running successfully",
    error: ""
  });
});

(async () => {
  await connectToDb();
  app.listen(port, async () => {
    console.log(`Server is running on port: ${port}`);
  });
})();

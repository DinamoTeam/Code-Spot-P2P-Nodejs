const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connectToDb = require('./db/mongoose');
require("dotenv").config({ path: "./config/config.env" });
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/values"));
app.use(require("./routes/utilities"));
app.use(require("./routes/turnservertoken"));
app.use(require("./routes/rooms"));

app.use(express.static(path.resolve(path.join(__dirname, "../../code-spot-client/dist/client"))))
app.get('*', (req, res) => {
  const filePath = path.resolve(
      __dirname,
      '..',
      '../',
      'code-spot-client',
      'dist',
      'client',
      'index.html',
  );
  res.sendFile(filePath);
});
(async () => { 
  await connectToDb();
  app.listen(port, async () => {
    console.log(`Server is running on port: ${port}`);
  });
})();

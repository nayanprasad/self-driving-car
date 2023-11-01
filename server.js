const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const PORT = 5000;
app.listen(PORT, () => console.log("server started...", PORT))

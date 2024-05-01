let express = require("express");
require("dotenv").config({ path: "./Config/.env" });
const cors = require('cors'); // Install this package if not already done.

const connectDb = require("./Config/ConnectDb");
///user
const user = require("./router/user");
let app = express();
connectDb();
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin.
}));
app.use(express.json());
app.use("/user", user);
let PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is successfully runing on PORT ${PORT}`)
);

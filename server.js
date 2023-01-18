const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const corsOptions = require('./config/corsOptions');
require('dotenv').config();
const passport = require("passport");

const authRoute = require("./routes/auth");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));



app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", authRoute);



//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
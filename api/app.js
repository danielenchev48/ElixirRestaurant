require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const cors = require('cors');

//connectDB
const connectDB = require("./db/connect");

//Port
const port = process.env.PORT || 5000;

//routers
const menuRouter = require("./routes/Menu.router");
const userRouter = require("./routes/User.router");
const contactsRouter = require("./routes/Contact.router");
const productsRouter = require("./routes/Products.router")

//
app.use(express.static("./public"));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/contacts", contactsRouter);
app.use("/api/v1/products", productsRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

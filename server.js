const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const { xss } = require("express-xss-sanitizer");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");

//Route file
const form = require("./routes/forms");
const bankAccount = require("./routes/bankAccounts");

//load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = express();

//Body parser
app.use(express.json());

//More security
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());

const limiter = rateLimit({
  windowsMs: 60 * 1000,
  max: 1000,
});
app.use(limiter);

app.use(hpp());
app.use(cors(
  {
    origin: ["https://yourskyyourmind-frontend.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));

//Mount routers
app.use("/api/v1/form", form);
app.use("/api/v1/bankaccount", bankAccount);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    "Server running in ",
    process.env.NODE_ENV,
    " mode on port ",
    PORT
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});

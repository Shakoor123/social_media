const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const postRoute = require("./routes/post");
const authRoute = require("./routes/auth");
const conversationRoute = require("./routes/coversations");
const messageRoute = require("./routes/messages");

var cors = require("cors");

dotenv.config();

//port connection
app.listen(4000, () => {
  console.log("server redy");
});
//database connection
mongoose.connect(process.env.URL, { useNewUrlParser: true }, () => {
  console.log("Mongoose connected");
});
//middile ware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);

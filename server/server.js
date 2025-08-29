require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const authRoute = require("./router/auh-routes");
const todoRoutes = require("./router/todo-routes")
const connectDb = require("./utils/db");
const errorMiddleWare = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-route");
const corsOption = {
  origin: "http://localhost:5173",
  method: "GET POST PUT DELETE",
  credential: true
}
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute);
app.use("/api/todo",todoRoutes);
app.use(errorMiddleWare)
const PORT = 5000;

connectDb()  
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect DB:", err.message);
  });
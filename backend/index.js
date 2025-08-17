const express = require("express");
const connectToMongoDB = require("./connection")
const app = express();
const taskRoute = require("./routes/taskRoute") 
const cors = require("cors"); 
const PORT = 3000

app.use(express.json());
app.use(cors());

connectToMongoDB("mongodb://localhost:27017/todoApp")

app.use("/api", taskRoute)

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

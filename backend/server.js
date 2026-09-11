const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("🔥 SERVER STARTING");
console.log("🔥 AUTH ROUTES:", authRoutes);

app.use("/api/auth", authRoutes);

app.get("/api/auth-direct", (req, res) => {
  res.json({
    message: "DIRECT ROUTE WORKING"
  });
});
app.post("/api/message/",(req,res) =>{
  res.json({
    message: `Hello ${req.body.name}`
  });
}) ;

app.post("/", (req, res) => {
  res.body({
    name: "Sami Abbasi",
    role: "Hy Everyone",
    learning : "React"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
const express = require("express");
const router = express.Router();
const pool = require ("../db");
app.use("/api/contact", contactRoutes);
const contactRoutes = require("./routes/contactRoutes");
router.post("/" , async (req, res) => {
    try {
        const{
        name,
        email,
        subject,
        message
    } = req.body;
     
     const result = await pool.query(
      `
      INSERT INTO contact_messages
      (name, email, subject, message)

      VALUES ($1, $2, $3, $4)

      RETURNING *
      `,
      [
        name,
        email,
        subject,
        message
      ]
    );

    res.status(201).json({
        message: " chal gaya bhadwa",
        data: result.rows[0]
    });
    } catch (error) {
        console.error("contact error " , error);
        res.status(500).json ({
            message: " nhi chala bhadwaaa",
            error : error.message
        }); 
    }
     
});
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM contact_messages ORDER BY created_at DESC"
    );

    res.status(200).json(result.rows);

  } catch (error) {

    console.error("GET CONTACT MESSAGES ERROR:", error);

    res.status(500).json({
      message: "Failed to get contact messages",
      error: error.message
    });

  }
});

module.exports = router;
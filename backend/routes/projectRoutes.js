const express = require("express");
const router = express.Router();

const pool = require("../db");

// =====================================
// CREATE PROJECT
// POST /api/projects
// =====================================

router.post("/", async (req, res) => {
  try {
    const { title, description, image_url } = req.body;

    const result = await pool.query(
      `
      INSERT INTO projects (title, description, image_url)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [title, description, image_url]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.error("CREATE PROJECT ERROR:", error);

    res.status(500).json({
      message: "Failed to create project",
      error: error.message
    });
  }
});


// =====================================
// GET ALL PROJECTS
// GET /api/projects
// =====================================

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM projects ORDER BY id DESC"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error("GET PROJECTS ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch projects",
      error: error.message
    });
  }
});


// =====================================
// GET SINGLE PROJECT
// GET /api/projects/:id
// =====================================

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM projects WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json(result.rows[0]);

  } catch (error) {
    console.error("GET SINGLE PROJECT ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch project",
      error: error.message
    });
  }
});

// =====================================
// UPDATE PROJECT
// PUT /api/projects/:id
// =====================================

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image_url } = req.body;

    const result = await pool.query(
      `
      UPDATE projects
      SET
        title = $1,
        description = $2,
        image_url = $3
      WHERE id = $4
      RETURNING *
      `,
      [title, description, image_url, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json(result.rows[0]);

  } catch (error) {
    console.error("UPDATE PROJECT ERROR:", error);

    res.status(500).json({
      message: "Failed to update project",
      error: error.message
    });
  }
});
// =====================================
// DELETE PROJECT
// DELETE /api/projects/:id
// =====================================

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM projects WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json({
      message: "Project deleted successfully",
      project: result.rows[0]
    });

  } catch (error) {
    console.error("DELETE PROJECT ERROR:", error);

    res.status(500).json({
      message: "Failed to delete project",
      error: error.message
    });
  }
});

module.exports = router;


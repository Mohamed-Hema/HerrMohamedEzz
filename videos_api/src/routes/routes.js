const express = require("express");
const router = express.Router();
const lessonsController = require("../controllers/controllers");

// API Routes for Lessons
router.post("/addlesson", lessonsController.createLesson);
router.get("/lessons", lessonsController.getAllLessons);
router.get("/lessons/:id", lessonsController.getLessonById);
router.put("/lessons/:id", lessonsController.editLesson);
router.delete("/lessons/:id", lessonsController.deleteLesson);

module.exports = router;

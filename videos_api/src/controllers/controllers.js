const Lesson = require("../models/lessonModel");

const createLesson = async (req, res) => {
  try {
    // Extract lesson details from the request body
    const {
      lessonName,
      youtubeVideoId,
      googleDriveLink,
      googleFormsLink,
      category,
    } = req.body;

    // Create a new lesson document
    const newLesson = new Lesson({
      lessonName,
      youtubeVideoId,
      googleDriveLink,
      googleFormsLink,
      category,
    });

    // Save the new lesson to the database
    const savedLesson = await newLesson.save();

    res.status(201).json(savedLesson);
  } catch (err) {
    res.status(500).json({ error: "Failed to save the lesson." });
  }
};

const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({ error: "Failed to get lessons." });
  }
};

const getLessonById = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found." });
    }
    res.status(200).json(lesson);
  } catch (err) {
    res.status(500).json({ error: "Failed to get the lesson." });
  }
};

const editLesson = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const updateData = req.body;

    // Find the lesson by ID and update it
    const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, updateData, {
      new: true,
    });

    if (!updatedLesson) {
      return res.status(404).json({ error: "Lesson not found." });
    }

    res.status(200).json(updatedLesson);
  } catch (err) {
    res.status(500).json({ error: "Failed to update the lesson." });
  }
};

const deleteLesson = async (req, res) => {
  try {
    const lessonId = req.params.id;

    // Find the lesson by ID and delete it
    const deletedLesson = await Lesson.findByIdAndRemove(lessonId);

    if (!deletedLesson) {
      return res.status(404).json({ error: "Lesson not found." });
    }

    res.status(200).json(deletedLesson);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete the lesson." });
  }
};

module.exports = {
  createLesson,
  getAllLessons,
  getLessonById,
  editLesson,
  deleteLesson,
};

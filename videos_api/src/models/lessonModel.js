const mongoose = require("mongoose");

const lessonSchema = mongoose.Schema({
  lessonName: {
    type: String,
    required: true,
  },
  youtubeVideoId: {
    type: String,
    required: true,
  },
  googleDriveLink: {
    type: String,
  },
  googleFormLink: {
    type: String,
  },
  category: {
    type: String,
    enum: ["1st secondary", "2nd secondary", "3rd secondary"],
    required: true,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;

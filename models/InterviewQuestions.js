const mongoose = require("mongoose");

const interviewQuestionsSchema = new mongoose.Schema({
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
    required: true,
  },
  questions: [
    {
      question: String,
      answerHint: String,
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("InterviewQuestions", interviewQuestionsSchema);

const mongoose = require("mongoose");

const resumeAnalysisSchema = new mongoose.Schema({
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
    required: true,
  },

  
  skillMatchPercent: Number,


  missingSkills: [String],


  suggestions: [String],


  atsScore: Number,


  keywordCoverage: Number,


  formattingIssues: [String],


  grammarScore: Number



}, { timestamps: true });

module.exports = mongoose.model("ResumeAnalysis", resumeAnalysisSchema);

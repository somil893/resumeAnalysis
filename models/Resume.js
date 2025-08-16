const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  parsedData: {
    fullName: String,
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    portfolio: String,
    education: [
      {
        institution: String,
        degree: String,
        fieldOfStudy: String,
        startDate: String,
        endDate: String,
        grade: String
      }
    ],
    experience: [
      {
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        responsibilities: [String],
        achievements: [String]
      }
    ],
    projects: [
      {
        name: String,
        description: String,
        technologies: [String],
        link: String
      }
    ],
    skills: [String],
    certifications: [String],
    languages: [String],
    awards: [String],
    hobbies: [String],
    rawText: String,
  },


  targetRole: String,


  analysis: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ResumeAnalysis",
  },

  interviewQuestions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InterviewQuestions",
  },

  premium:{
    type : Boolean,
    default:false
  }


}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);

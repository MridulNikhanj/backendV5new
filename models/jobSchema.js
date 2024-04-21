import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title."],
    minLength: [3, " Job Title must contain at least 3 Characters!"],
    maxLength: [30, "Job Title cannot exceed 30 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide job decription."],
    minLength: [3, "Job Description must contain at least 3 Characters!"],
    maxLength: [350, "Job Description cannot exceed 350 Characters!"],
  },
  category: {
    type: String,
    required: [true, "job category is required!"],
  },
  country: {
    type: String,
    required: [true, "job country is required!"],
  },
  city: {
    type: String,
    required: [true, "job city is required!"],
  },
  location: {
    type: String,
    required: [true, "Please provide exact location."],
    minLength: [20, "Location must contian at least 20 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary from must contain at least 4 digits"],
    maxLength: [9, "Salary from cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary to must contain at least 4 digits"],
    maxLength: [9, "Salary to cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);

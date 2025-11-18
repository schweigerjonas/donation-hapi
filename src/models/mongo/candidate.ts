import Mongoose from "mongoose";
import { Candidate } from "../../types/donation-types";

const { Schema } = Mongoose;

const candidateSchema = new Schema<Candidate>({
  firstName: String,
  lastName: String,
  office: String,
});

export const CandidateMongoose = Mongoose.model("Candidate", candidateSchema);

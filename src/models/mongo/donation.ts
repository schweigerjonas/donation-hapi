import Mongoose from "mongoose";
import { Donation } from "../../types/donation-types";

const { Schema } = Mongoose;

const donationSchema = new Schema<Donation>({
  amount: Number,
  method: String,
  donor: String,
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
  },
  lat: String,
  lng: String,
});

export const DonationMongoose = Mongoose.model("Donation", donationSchema);

import { Donation } from "../../types/donation-types.js";
import { DonationMongoose } from "./donation.js";

export const donationStore = {
  async find() {
    const donations = await DonationMongoose.find().populate("donor").populate("candidate").lean();
    return donations;
  },

  async findBy(id: string) {
    const donations = await DonationMongoose.find({ candidate: id });
    return donations;
  },

  async add(donation: Donation) {
    const newDonation = new DonationMongoose({ ...donation });
    await newDonation.save();
    const retDonation = await DonationMongoose.findOne({ _id: newDonation._id }).populate("candidate").lean();
    return retDonation;
  },

  async delete() {
    await DonationMongoose.deleteMany({});
  },
};

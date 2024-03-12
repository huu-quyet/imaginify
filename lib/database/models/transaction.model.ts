import { Schema, model, models } from "mongoose";
import { IUser } from "./user.model";

interface ITransaction extends Document {
  createdAt?: Date;
  stripeId: string;
  amount: string;
  plan?: string;
  credits?: number;
  buyer?: IUser;
}

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const TransactionModel =
  models?.Transaction || model<ITransaction>("Transaction", TransactionSchema);

export default TransactionModel;

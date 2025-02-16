import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = models.user || model("user", userSchema);

export default user;

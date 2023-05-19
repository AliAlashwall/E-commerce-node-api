import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean, required : true },
  }

);

UserSchema.post("save", function(next){
  console.log("the user is created successfuly");
});

UserSchema.pre("save", async function(next){
  console.log("User is about to be saved");
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


export const User = mongoose.model("User", UserSchema);

var defaultUser = new User({
  username: 'ali',
  email: 'ali@test.com',
  password: 'ali1234',
  isAdmin: false,
});

var admin1 = new User({
  username: 'admin',
  email: 'admin@admin.com',
  password: '0000',
  isAdmin: true,
});

const users = [defaultUser , admin1];

// Save the default user in the database if it doesn't exist
User.find({}, function (err, foundList) {
  if (!err && foundList.length == 0) {
    User.insertMany(users, (err1) => {
      if (!err1) {
        console.log("Default users are saved in the database");
      }
    });
  }
});
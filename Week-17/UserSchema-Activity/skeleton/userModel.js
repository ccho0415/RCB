/* Mongoose Example (Students) (18.3.03)
 * ===================================== */

// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({

  /* TODO:
   * Add four entries into our schema. These should be:
   *
   * 1: A string. This needs to be required, and also trimmed.
   * 2: A password. This needs to be required, trimmed, and at least 6 chars.
   * 3: An email. It must be unique in our collection, and must be a valid email.
   * 4: A date. It should be the current date.
   *
   * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
   * Use that with the model attribute that checks for a valid match.
   * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
   // string must be a string. We "trim" it to remove any trailing white space
  // Notice that it is required, as well. It must be entered or else mongoose will throw an error
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // This must be a unique number in the collection, and it must be entered
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      // Function takes in the value as an argument
      function(input) {
        // If this returns true, proceed. If not, return an error message
        return input.length >= 6;
      },
      // Error Message
      "Password Should be Longer."
    ]    
  },
  // This will only take a string that looks like an email
  // It must match the regex before it's accepted
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },

  date: {
    type: Date,
    default: Date.now
  }  

});

// Create the "User" model with our UserSchema schema
var User = mongoose.model("User", UserSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = User;

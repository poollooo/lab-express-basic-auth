const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      unique: true
    },
    email: {
      type: Schema.Types.String,
    },
    phoneNumber: Schema.Types.Number,
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
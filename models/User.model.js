const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      unique: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    phoneNumber: Schema.Types.Number,
    password: { type: Schema.Types.String, required: true }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User

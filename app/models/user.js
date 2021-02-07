const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        avatar:{
            type: String,
            default: 'http://image.com'
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true    
    }
)

UserSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('user', UserSchema)
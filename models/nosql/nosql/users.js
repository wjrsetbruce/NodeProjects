const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema (
    {
        name: {
            type:String

        },
        age: {
            type:Number
        },
        email: {
            type:String,
            unique:true
        },
        passwords: {
            type:String,
            unique:true
        },
        role: { 
            type:["user", "admin"],
            default:"user",
        },        
    },
    {
        timestamps:true, //TODO createdAT, updateAt
        versionKey:false,
    }

);

module.exports = mongoose.model("users", UserSchema);
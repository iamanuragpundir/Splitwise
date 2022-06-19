const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Friend=new Schema({
    userID:{
        type: String,
        required: true
    },
    amount:{
        type:Number,
        required: true
    }
});

const UserSchema=new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    userID:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    associated_groups:[Schema.Types.ObjectId],
    friends:[Friend]
},
{
    timestamps:true,
});

const User=mongoose.model('User',UserSchema);

module.exports = User;
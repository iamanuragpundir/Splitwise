const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Part_proportion= new Schema({
    userId:{
        type: String,
        required: true
    },
    proportion:{
        type: Number,
        required: true
    }
});

const TransactionSchema= new Schema({
    transaction_name :{
        type: String,
        required: true
    },
    amount :{
        type: Number,
        required: true
    }, //amount owed or borrowed 
    lender :{
        type: String,
        required: true
    },// userid  
    proportion:[Part_proportion]//decimal, if any otherwise equally amongst all
});

const GroupSchema=new Schema({
    groupName :{
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    createdBy:{
        type: String,
        required: true,
        trim: true
    },
    members:[String],
    transactions:[TransactionSchema],
},
{
    timestamps:true,
});

exports.Group=mongoose.model('Group',GroupSchema);
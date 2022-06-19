const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const axios=require("axios");
const session= require('express-session')

require('dotenv').config();

const app=express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(session({
    secret:'$u9rc0d=',
    saveUninitialized: false,
    resave: false
}));


const uri=process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection=mongoose.connection;
connection.once('open', function(){
    console.log("Connected to DB.");
});

const {Group} = require('./models/group.model');
const User = require('./models/user.model');

/* app.post("/",function(request,response){
    axios.get('googleAPI_HIDDEN='+request.body.tokenId)
    .then(data => {
        const fn=data.data.given_name;
        const ln=data.data.family_name;
        const em=data.data.email;
        user.find({userEmailID:em})
        .then(result => {
            if(result.length==0){
                let dataIn=new user({userFname:fn,userLname:ln,userEmailID:em});
                dataIn.save();
            }
            response.json({userFname:fn,userLname:ln,userEmailID:em});
        })
        .catch(error=>console.log(error));
    })
    .catch(error=>console.log(error));
}); */

app.post("/group/transaction", function(request, response){
    const body=request.body;
    
    Group.findOneAndUpdate({members:{$in:[body.userId]},groupName:body.groupName},{$push:{
        transactions:{
            transaction_name: body.subject,
            amount: body.amount,
            lender: body.lender,
            proportion: body.borrowers
        }
    }},function(err,data){
        response.send(data);
    });
});

app.post("/user/create", function(request, response){
    const body=request.body;
    
    let addUser= new User();
    addUser.username=body.name;
    addUser.userID=body.emailId;
    addUser.associated_groups=[];
    addUser.friends=[];

    addUser.save()
    .then(result => response.json(result))
    .catch(error => response.json(error));
});

app.get("/group/:id",function(request,response){
    const id=request.params.id;
    
});

app.post("/group/create",function(request,response){
    const name=request.body.groupname;
    
    let grp = new Group();
    grp.groupName=name;
    grp.createdBy=request.body.createdBy;
    grp.members=request.body.members;
    grp.transactions=[];
      
    grp.save()
    .then(result => response.json(result))
    .catch(error => response.json(error));
});

app.put("/group/",function(request,response){
    
});

app.delete("/group/:id",function(request,response){
    const id=request.params.id;
    
});

app.listen(port,function(){
    console.log(`Server running at port ${port}`);
});
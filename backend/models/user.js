const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
  Username:{
    type:String,
    required:true,
  },
  Password:{
    type:String,
    required:true,
  },
  Email:{
    type:String,
    required:true,
    unique:true,
  },
    location:{
    type:String,
  },
  destination:{
    type:String,
  },
  carNumber:{
    type:String,
  },
  carcapacity:{
    type:String,
  },
  availableseats:{
    type:String,
  },
  conditions:{
    type:String,
  },
},
{});

const User=mongoose.model("User",userSchema);
module.exports=User;

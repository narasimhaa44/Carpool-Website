const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
// const allowedOrigins = require('../front-end/carpool/config/allowedOrigins.cjs'); 
const allowedOrigins=[
  'http://localhost:5173',
  'http://localhost:4000'
];

const User=require("../backend/models/user");


const app=express();
const PORT=4000;


mongoose.connect("mongodb://127.0.0.1:27017/user")
        .then(()=>console.log("Connected to MongoDB"))
        .catch((err)=>console.log(err));

const corsOptions={
  origin:(origin,callback)=>{
    if(allowedOrigins.includes(origin)||!origin){
      callback(null,true);
    }else{
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials:true,
  optionSuccessStatus:200,
};


app.use(cors(corsOptions));
app.use(express.json());

app.post("/Signup",async(req,res)=>{
  const {user,pwd,email}=req.body;
  const Exsistuser=await User.findOne({user,email});
  if(Exsistuser){
    return res.status(400).json({message:"User already exsist"});
  }
  const newuser=User.create({
      Username:user,
      Password:pwd,
      Email:email,
  });
  console.log(newuser);
  return res.status(200).json({message:"User created"});
});

app.patch("/Signup", async (req, res) => {
  try {
    const {
      location,
      destination,
      carNumber,
      carcapacity,
      availableseats,
      conditions,
    } = req.body;
    const user = await User.findOne({Username:"Leela_44"})
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "No user found to update" });
    }

    user.location = location;
    user.destination = destination;
    user.carNumber = carNumber;
    user.carcapacity = carcapacity;
    user.availableseats = availableseats;
    user.conditions = conditions;

    await user.save();
    console.log(user);
    return res.status(200).json({ message: "Ride info updated", user });
  } catch (err) {
    return res.status(500).json({ message: "Error updating user", error: err.message });
  }
});

app.listen(PORT,()=>console.log(`server running on port ${PORT}`));
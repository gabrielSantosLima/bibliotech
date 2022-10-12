import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Database:senha@user.kyosic1.mongodb.net/Bibliotech');

let db = mongoose.connection;

export default db;

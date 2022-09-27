import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Callidus:123@callidus.kyosic1.mongodb.net/Bibliotech');

let db = mongoose.connection;

export default db;

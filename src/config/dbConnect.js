import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gabriel:Asdf7955@node-express.izfqx0d.mongodb.net/LivrariaAPI");

let db = mongoose.connection;

export default db;
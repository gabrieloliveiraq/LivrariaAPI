import mongoose from "mongoose";

let password = 'Asdf7955'

mongoose.connect(`mongodb+srv://gabriel:${password}@node-express.izfqx0d.mongodb.net/LivrariaAPI`);

let db = mongoose.connection;

export default db;
// const mongoose = require ("mongoose");
// const mongoURI = 'mongodb://localhost:27017/inotebook'

// const connectToMongo = () => { 
//    mongoose.connect(mongoURI, ()=>{
//       console.log("connected to mongoose successfully");
//    })
// }
// module.exports = connectToMongo;




const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected sucessfully')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;

//connection no - 1

const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://23536akash2021:23536akash2021@cluster0.uoq4urs.mongodb.net/iNotebook?retryWrites=true&w=majority"

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



  



// connection no -2  // bufforing time out error

// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://23536akash2021:23536akash2021@cluster0.uoq4urs.mongodb.net/?retryWrites=true&w=majority"
// const connectToMongo = async () => {
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log('Mongo connected sucessfully');

// }).catch((error) => console.log('not connected'));
// }
// module.exports = connectToMongo;








// connection no -3 codewith herry walla // error arha h koi callback fn sa related

// const mongoose = require ("mongoose");
// const mongoURI = "mongodb+srv://23536akash2021:23536akash2021@cluster0.uoq4urs.mongodb.net/iNotebook?retryWrites=true&w=majority"

// const connectToMongo = () => { 
//    mongoose.connect(mongoURI, ()=>{
//       console.log("connected to mongoose successfully");
//    })
// }
// module.exports = connectToMongo;


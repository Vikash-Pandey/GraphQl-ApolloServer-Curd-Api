import { mongoose } from "mongoose";

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    
    },
    email:{
        type:String,
        required:true,
      
    },

});

//Export the model
 mongoose.model('GeaphQlUser', userSchema);

const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema=new Schema({
    fullName: { type: String},
    email: { type: String},
    password: { type: String},
    createdOn: { type: Date, default: new Date().getTime() },

});

userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified) return next();
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
})

userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password, this.password);
}


module.exports=mongoose.model("User", userSchema);


import userSchema from "../models/userSchema.js";

const thirdApi=async(req,res)=>{
    userSchema.find({ 
        last_name: /^M/, // matches last name that starts with "M"
        quote: { $regex: /^.{16,}$/ }, // matches quote with length greater than 15
        email: { $regex: /M/i } // matches email that includes the last name
      })
    .exec()
    .then(result => {
        if (result.length > 0) {
            console.log(result);
            res.json(result)
        }
    }).catch(err => {
        return res.send(err);
    })
}
export default thirdApi;
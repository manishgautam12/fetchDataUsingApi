import userSchema from "../models/userSchema.js";

const fourthApi=async(req,res)=>{
    userSchema.find({
        car: { $in: ['BMW', 'Mercedes', 'Audi'] }, // matches car brand BMW, Mercedes, or Audi
        email: { $regex: /^[^\d]+$/ } // matches email that does not include any digit
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
export default fourthApi;
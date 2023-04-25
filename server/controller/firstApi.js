import userSchema from "../models/userSchema.js";
 const firstApi=async(req,res)=>{
 userSchema.find({ income: { $lt: 5 }, $or: [{ car: 'BMW' }, { car: 'Mercedes' }] })
 .exec()
 .then(result=>{
   if(result.length>0){
    console.log(result);
    res.json(result)
   }
 }).catch(err=>{
    return res.send(err);
 })
};
export default firstApi;


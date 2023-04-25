import userSchema from "../models/userSchema.js";
const secondApi = async (req, res) => {
    userSchema.find({ gender: "Male",phone_price: { $regex: /^[1-9][0-9]{4,}$/ } })
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
export default secondApi;
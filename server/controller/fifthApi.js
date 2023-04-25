import userSchema from "../models/userSchema.js";
const fifthApi=async(req,res)=>{
    try {
        const topCities = await userSchema.aggregate([
          { $group: { _id: '$city', count: { $sum: 1 }, totalIncome: { $sum: '$income' } } },
          { $sort: { count: -1 } },
          { $limit: 10 },
          { $project: { _id: 1, count: 1, averageIncome: { $divide: ['$totalIncome', '$count'] } } }
        ]);
        res.json(topCities);
      } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
      }
}
export default fifthApi;
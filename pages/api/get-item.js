import Meetup from "@/models/MeetUp";
import { connectMongo } from "@/libs/connectMongo";

const handler = async(req, res) => {

    if(req.method==='POST')
    {
        res.status(404).json({message: 'Invalid'})
        return;
    }
     await connectMongo();  
    const allData = await Meetup.find({});
     
    res.status(200).json({
        success: true,
        data: allData
    })



}
export default handler;
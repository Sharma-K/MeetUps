import Meetup from "@/models/MeetUp";
import { connectMongo } from "@/libs/connectMongo";

const handler = async(req, res) => {
    const id = req.query.id;


    if(req.method==='POST')
    {
        res.status(404).json({message: 'Invalid'})
        return;
    }
     await connectMongo();  
    const item = await Meetup.findById(id);
    if(!item)
    {
        res.staus(400).json({
            failure: true,
            data: null 
        })
    }
     
    res.status(200).json({
        success: true,
        data: item
    })



}
export default handler;
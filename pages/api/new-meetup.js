//api/new-meetup
// import MeetUp from "@/models/MeetUp";
import Meetup from "@/models/MeetUp";
import { connectMongo } from "@/libs/connectMongo";

const handler = async(req, res) =>{
    if(req.method==='POST')
    {
        await connectMongo();
        const data = req.body;
        const {title, image, address, description} = data;
         
        const meet = new Meetup({title, image, address, description})
        
        await meet.save();

        res.status(201).json({message: 'Meetup inserted!'});
        
        
    }

}
export default handler
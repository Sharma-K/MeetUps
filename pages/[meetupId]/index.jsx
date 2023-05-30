import MeetupDetail from "@/components/meetups/MeetupDetail";
import Head from "next/head";
import { connectMongo } from "@/libs/connectMongo";
import Meetup from "@/models/MeetUp";
import mongoose from "mongoose";

const MeetupDetails = (props) =>{

    if(props.error)
    {
        return( <>
        <Head >
            <title>Item not found</title>
            <meta name="description" content="Not found" />
        </Head>
         <h1>Not found</h1>
        </>
        )
    }

 

    
    
    return (
        <>
        <Head >
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Head>
        <MeetupDetail 
        image={props.image} 
        title={props.title} 
        address={props.address} 
        description={props.description} 
        />
        </>
    )

}

export async function getStaticPaths()
{
    connectMongo();
    const data = await Meetup.find({});
    
    const path = data.map((d) => ({
        params: { meetupId: d._id.toString() },
      }))
      return {
        fallback: true,
        paths: path,
       
    }

}


export async function getStaticProps(context)
{
    connectMongo();
    const id = context.params.meetupId;
   
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return{
            props: {
                error:true
            }
        }
    }
    
    
    const data = await Meetup.findById(id);
    if(!data.title)
    {
        return{
            props: {
                error:true
            }
        }
    }
   
    
    return {
        props: {
                image: data.image,
                id: data._id.toString(),
                title: data.title,
                address: data.address,
                description: data.description
            
        }
    }





}

// export async function getStaticPaths(){
   
//     const response = await(await fetch(process.env.BASE_URL+'/api/get-meetup',
//     {
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     }
//     )).json();
//     const data = response.data;
   
   
//     const path = data.map((d) => ({
//         params: { meetupId: d._id.toString() },
//       }))

   
//     return {
//         paths: path,
//         fallback: true,
//     }
// }
// export async function getServerProps(context){
//     const meetId = context.params.meetupId;
//     console.log(meetId);
//     return {
//         props: {
//             meetupData: {
//                                 image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
//                                 id: id,
//                                 title: 'First Meeup',
//                                 address: 'Some street 5, Some city',
//                                 description: 'The meetup description'
//                             }
//         }
//     }
// } 
// export async function getStaticProps(context){
//     const id = context.params.meetupId; 
    
//     const response = await(await fetch(process.env.BASE_URL+`/api/get-meetup/${id}`)).json();
//   const data = response.data;
   
    
//     return {
//         props: {
//             meetupData: {
//                 image: data.image,
//                 id: data._id,
//                 title: data.title,
//                 address: data.address,
//                 description: data.description
//             }
//         }
//     }

// }

export default MeetupDetails;
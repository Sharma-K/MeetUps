import MeetupDetail from "@/components/meetups/MeetupDetail";
import Head from "next/head";

const MeetupDetails = (props) =>{
    
    return (
        <>
        <Head >
            <title>{props.meetupData.title}</title>
            <meta name="description" content={props.meetupData.description} />
        </Head>
        <MeetupDetail 
        image={props.meetupData.image} 
        title={props.meetupData.title} 
        address={props.meetupData.address} 
        description={props.meetupData.description} 
        />
        </>
    )
}
export async function getStaticPaths(){
   
    const response = await(await fetch(process.env.BASE_URL+'/api/get-meetup')).json();
    const data = response.data;
   
   
    const path = data.map((d) => ({
        params: { meetupId: d._id.toString() },
      }))

   
    return {
        paths: path,
        fallback: true,
    }
}
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
export async function getStaticProps(context){
    const id = context.params.meetupId; 
    
    const response = await(await fetch(`http://localhost:3000/api/get-meetup/${id}`)).json();
  const data = response.data;
   
    
    return {
        props: {
            meetupData: {
                image: data.image,
                id: data._id,
                title: data.title,
                address: data.address,
                description: data.description
            }
        }
    }

}

export default MeetupDetails;
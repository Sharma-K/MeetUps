import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";
const Home = (props) =>{
 
    
    return ( 
        <>
        <Head>
            <title>Meetups</title>
            <meta name="description" content="List of your meetups" />
        </Head>
    <MeetupList meetups={props.meetups} />
    </>
    )
}
export async function getServerSideProps(context){
  

    const response = await(await fetch('http://localhost:3000/api/get-meetup')).json();
   const data = response.data;
  
    return {
        props:{
            meetups: data
        }
    }
}
// export async function getStaticProps(){
//     //fetching of the data


//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export default Home;
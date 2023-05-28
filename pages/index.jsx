import MeetupList from "@/components/meetups/MeetupList";
const Home = (props) =>{
 
    
    return ( 
    <MeetupList meetups={props.meetups} />
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
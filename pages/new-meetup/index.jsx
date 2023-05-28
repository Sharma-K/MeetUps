import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";


const NewMeetUp =()=>{
    const router = useRouter();
   async function addMeetupHandler(eneteredData){
       
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(eneteredData),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        router.push('/');
    
    }

    return (
        <>
        <Head>
            <title>Add new Meetup</title>
            <meta name="description" content="Add a new meetup" />
        </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} /> 
    </>
    );
}
export default NewMeetUp;
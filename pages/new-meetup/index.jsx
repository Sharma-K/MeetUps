import NewMeetupForm from "@/components/meetups/NewMeetupForm";
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

    return (<NewMeetupForm onAddMeetup={addMeetupHandler} /> );
}
export default NewMeetUp;
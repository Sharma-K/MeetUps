import NewMeetupForm from "@/components/meetups/NewMeetupForm";
const NewMeetUp =()=>{
    function addMeetupHandler(eneteredData){
        console.log(eneteredData);

    }
    return (<NewMeetupForm onAddMeetup={addMeetupHandler} /> );
}
export default NewMeetUp;
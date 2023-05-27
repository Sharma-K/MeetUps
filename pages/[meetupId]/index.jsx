import MeetupDetail from "@/components/meetups/MeetupDetail";
const MeetupDetails = () =>{
    return (
        <>
        <MeetupDetail image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' title='First Meetup' address='Some Streeet 5, Some City' description='the meet up description' />
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
        <h1>A first meetup</h1>
        <address>Some Street 5, Some City</address>
        <p>The meetup description</p>


        </>
    )
}
export default MeetupDetails;
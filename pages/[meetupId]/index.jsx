import MeetupDetail from "@/components/meetups/MeetupDetail";
const MeetupDetails = (props) =>{
    return (
        <>
        <MeetupDetail image={props.image} title={props.title} address={props.address} description={props.description} />
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
        <h1>A first meetup</h1>
        <address>Some Street 5, Some City</address>
        <p>The meetup description</p>


        </>
    )
}
export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            { 
               params: {
                     meetupId: 'm1'
                }
            },
            {
                params:{
                    meetupId: 'm2'
                }
            }
        ]
    }
}
export async function getStaticProps(context){
    const id = context.params.meetupId;   
    return {
        props: {
            meetupData: {
                image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                id: id,
                title: 'First Meeup',
                address: 'Some street 5, Some city',
                description: 'The meetup description'
            }
        }
    }

}

export default MeetupDetails;
import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meet Up',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        address: 'Heaven',
        description: 'Great'
    },
    {
        id: 'm2',
        title: 'A second Meet Up',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        address: 'Hell',
        description: 'Great'
    }
]
const Home = (props) =>{

    return ( 
    <MeetupList meetups={props.meetups} />
    )
}
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps(){
    //fetching of the data
    return {
        props:{
            meetups: DUMMY_MEETUPS
        }
    }
}
export default Home;
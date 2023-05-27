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
const Home = () =>{
 const [loadedMeetups, setLoadedMeetups] =  useState([])
    useEffect(()=>{
       setLoadedMeetups(DUMMY_MEETUPS);
    },[])
    return ( 
    <MeetupList meetups={loadedMeetups} />
    )
}
export default Home;
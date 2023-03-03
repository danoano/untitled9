import {useState} from "react";


function ReactPlayer(props: { url: string }) {
    return null;
}

export default function FotballVideo (){
    const [seconds, setSeconds] = useState()
    return(
        <>
            <div>
                <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
                <ReactPlayer url="https://www.w3schools.com/html/mov_bbb.mp4" />
            </div>
        </>
    )
}
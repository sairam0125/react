import React,{useRef,useState} from 'react';
import video from "./video.mp4"
const RefExamples=()=>{
    const [play,setPlay]=useState(true);
    let VideoRef=useRef();
    console.log(VideoRef);

    let playORpause=()=>{
        if(play==true){
            VideoRef.current.play();
            setPlay(false);
            console.log(play);
        }
        else{
            VideoRef.current.pause();
            setPlay(true);
            console.log(play);
        }
    }
    return(
        //! audio and video tags are empty tags they dont print any content, they only take the source.
        <div>
            <video src={video} ref={VideoRef} onClick={playORpause}>
                Video
            </video>
        </div>
    )
    
}
export default RefExamples;
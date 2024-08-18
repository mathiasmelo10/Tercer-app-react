
import './App.css';

import React, {useRef} from "react";

import video from "./assets/video.mp4";

function App() {

  const videoRef=useRef(null);

  const videoPlay=()=>{

    videoRef.current.play();

  }

  const videoPause=()=>{

    videoRef.current.pause();

  }

return (

  <div>

  <video ref={videoRef} width="500">
    <source src={video} type="video/mp4"></source>
  </video>
    <div>

        <button onClick={videoPlay}>Play</button>
        <button onClick={videoPause}>Pause</button>


    </div>

  </div>

);

}

export default App;

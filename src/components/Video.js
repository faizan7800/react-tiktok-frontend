import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "../styles/Video.css";
import VideoSidebar from "./VideoSidebar";
function Video({ url, likes, comments, shares, channel, description, song }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    // if video is playing
    // stop it ...
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;

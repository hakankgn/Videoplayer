import React, { useState } from "react";
import VideoPlayer from "./Components/VideoPlayer";
import VideoSwitcher from "./Components/VideoSwitcher";
import "./styles.css";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState("video1.mp4");

  const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];

  const handleVideoChange = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoSwitcher
        videos={videos}
        selectedVideo={selectedVideo}
        onVideoChange={handleVideoChange}
      />
    </div>
  );
};

export default App;

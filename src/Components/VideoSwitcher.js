import React from "react";

const VideoSwitcher = ({ videos, selectedVideo, onVideoChange }) => {
  return (
    <div>
      <h2>Video Switcher</h2>
      {videos.map((video) => (
        <label key={video}>
          <input
            type="radio"
            value={video}
            checked={selectedVideo === video}
            onChange={() => onVideoChange(video)}
          />
          {video}
        </label>
      ))}
    </div>
  );
};

export default VideoSwitcher;

import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item" key={video.id}>
      <a href={video.url} target="_blank" rel="noopener noreferrer">

        <img
          className="thumbnail"
          src={video.thumbnail_url.replace("%{width}x%{height}", "320x180")}
          alt={video.title}
        />
        <p>{video.title}</p>
        <p>Published At: {video.published_at}</p>
        <p>View Count: {video.view_count}</p>
        <p>User Name: {video.user_name}</p>
      </a>
    </div>
  );
};

export default VideoItem;

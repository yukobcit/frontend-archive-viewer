import React, { useState, useEffect } from "react";

const ClipItem = ({ clip }) => {
  return (
    <div className="video-item" key={clip.id}>
      <a href={clip.url} target="_blank" rel="noopener noreferrer">

      {clip.thumbnail_url && (
        <img className="thumbnail"
          src={
            clip.thumbnail_url.startsWith("https://static-cdn.jtvnw.net/")
              ? clip.thumbnail_url.replace("%{width}x%{height}", "320x180")
              : clip.thumbnail_url
          }
          alt={clip.title}
        />
      )}
      <p>{clip.title}</p>
      <p>Description: {clip.title}</p>
      <p>Published At: {clip.created_at}</p>
      <p>View Count: {clip.view_count}</p>
      <p>Broadcaster Name: {clip.broadcaster_name}</p>
      </a>
    </div>
  );
};

export default ClipItem;

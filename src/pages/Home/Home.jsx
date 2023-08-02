import React, { useState, useEffect } from "react";
import "./Home.css";
import VideoItem from "./VideoItem";
import ClipItem from "./ClipItem";

const Home = () => {
  const [items, setItems] = useState(null);
  const [username, setUsername] = useState(null);
  const [videoType, setVideoType] = useState(null);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const newVideoType = event.nativeEvent.submitter.name.toLowerCase();
    setVideoType(newVideoType);
    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    console.log(apiEndpoint);
    let fetchUrl = null;

    if (newVideoType === "archive" || newVideoType === "highlight") {
      fetchUrl = `${apiEndpoint}/videos/${newVideoType}/${username}`;
    } else if (newVideoType === "clip") {
      fetchUrl = `${apiEndpoint}/clips/${username}`;
    }
    console.log(fetchUrl);
    getArchive(fetchUrl);
  };

  const getArchive = async (fetchUrl) => {
    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error("Error fetching archive:", error);
    }
  };

  return (
    <div className="container">
      <div className="home-description">
        Input username to search their followed creators’ latest videos
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username" className="username-label">Username</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            className="username-input"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="selects">
          <label htmlFor="video-type"></label>
          <div className="selects-buttons">
            <input
              type="submit"
              name="archive"
              value="Archives"
              className={activeButton === "archive" ? "active" : ""}
              onClick={() => handleButtonClick("archive")}
            />
            <input
              type="submit"
              name="highlight"
              value="Highlights"
              className={activeButton === "highlight" ? "active" : ""}
              onClick={() => handleButtonClick("highlight")}
            />
            <input
              type="submit"
              name="clip"
              value="Clips"
              className={activeButton === "clip" ? "active" : ""}
              onClick={() => handleButtonClick("clip")}
            />
          </div>
        </div>
      </form>
      <div className="contents">
        {items ? (
          <div>
            {items.map((video) => {
              return videoType === "clip" ? (
                <ClipItem key={video.id} clip={video} />
              ) : (
                <VideoItem key={video.id} video={video} />
              );
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;

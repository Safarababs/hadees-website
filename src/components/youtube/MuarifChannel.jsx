import React, { useState, useEffect } from "react";
import axios from "axios";

const MuarifChannel = ({ videoId }) => {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const getMetadata = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
          params: {
            part: "snippet,statistics",
            id: videoId,
            key: "AIzaSyBIeOQ2Q4kecMDW0u9e4EksNMBNb6hTDcA",
          },
        }
      );

      setMetadata(response.data.items[0]);
    };

    getMetadata();
  }, [videoId]);

  return (
    <div>
      {metadata && (
   
          <h1 className="youtube">
            and the second channel name is {metadata.snippet.title} has{" "}
            {metadata.statistics.subscriberCount} subscribers. <br></br>
            we have posted {metadata.statistics.videoCount} videos in total on
            tafseer-e-quran, mafaheem-e-quran, tajweed etc and there is{" "}
            {metadata.statistics.viewCount} views in total. Please{" "}
            <a
              style={{ color: "blue" }}
              href="https://www.youtube.com/channel/UCmvODTtMxqu0--sBAZispHg"
            >
              Subscribe
            </a>{" "}
            this channel also!{" "}
          </h1>
   
      )}
    </div>
  );
};

export default MuarifChannel;

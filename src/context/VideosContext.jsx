import { createContext, useEffect, useState } from "react";

const VideosContext = createContext({});

// eslint-disable-next-line react/prop-types
export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/videos", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        const videosGroup = data.reduce((acc, currentValue) => {
          acc[currentValue["category"]] = acc[currentValue["category"]] || [];

          acc[currentValue["category"]].push(currentValue);

          return acc;
        }, {});
        setVideos(videosGroup);
      });
  }, []);

  const eliminarVideo = async (id) => {
    await fetch(`http://localhost:3000/videos/${id}`, {
      method: "DELETE",
    });

    const updatedVideos = Object.entries(videos).reduce(
      (acc, [category, videoList]) => {
        acc[category] = videoList.filter((video) => video.id !== id);
        return acc;
      },
      {}
    );

    setVideos(updatedVideos);
  };

  return (
    <VideosContext.Provider
      value={{
        videos: videos,
        setVideos: setVideos,
        eliminarVideo: eliminarVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContext;

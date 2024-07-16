/* eslint-disable react/prop-types */
import { CardVideo } from "../card/CardVideo";

export const GridVideos = ({ videos }) => {
  return (
    <div className="videos-categoria">
      <div className="grid-video">
        {videos.map((video) => (
          <CardVideo key={video.id} video={video}/>
        ))}
      </div>
    </div>
  );
};

import { Fragment} from "react";
import { GridVideos } from "../grid-videos/GridVideos";
import "./videos.css";
import { useVideos } from "../../hooks/useVideos";

const diccionario = {
  FrontEnd: "Front End",
  BackEnd: "Back End",
  Gestion: "Innovación y gestión",
};

export const Videos = () => {
  const { videos } = useVideos();

  return (
    <section className="videos">
      {Object.entries(videos).map((array) => (
        <Fragment key={array}>
          <div
            className={`videos-title ${diccionario[array[0]]
              .toLowerCase()
              .replace(" ", "")}`}
          >
            <h1>{diccionario[array[0]]}</h1>
          </div>
          <GridVideos videos={array[1]} />
        </Fragment>
      ))}
    </section>
  );
};

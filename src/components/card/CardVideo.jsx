/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import cardlogo from "../../assets/VideoCard.png";
import imgborrar from "../../assets/Vector.png";
import imgEditar from "../../assets/Vector.svg";
import { useModal } from "../../hooks/useModal";
import { useVideos } from "../../hooks/useVideos";
export const CardVideo = ({video}) => {

  const {open, setOpen} = useModal();
  const {eliminarVideo} = useVideos();
  return (
    <div className="card">
      <img src={`./${video.category.toLowerCase()}.png`} alt="card" />
      <div className="buttons">
        <span className="button" onClick={() => eliminarVideo(video.id)}>
          <img src={imgborrar} alt="borrar-svg" />
          <span className="button-text" >Borrar</span>
        </span>
        <span className="button" onClick={() => setOpen(true)}>
          <img src={imgEditar} alt="editar-svg" />
          <span className="button-text">Editar</span>
        </span>
      </div>
    </div>
  );
};

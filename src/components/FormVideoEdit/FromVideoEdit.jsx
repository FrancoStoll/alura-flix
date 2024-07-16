/* eslint-disable react/prop-types */
import { useState } from "react";
import "./formvideoedit.css";
import { useVideos } from "../../hooks/useVideos";
import { useModal } from "../../hooks/useModal";

export const FormVideoEdit = ({ modalVideo }) => {
  const { editVideo } = useVideos();
  const {setOpen} = useModal()

  const [info, setInfo] = useState({
    title: modalVideo.title,
    category: modalVideo.category,
    image: modalVideo.image,
    video: modalVideo.video,
    description: modalVideo.description,
  });

  function handleSubmit(e) {
    e.preventDefault();

    editVideo({
      ...info,
      id: modalVideo.id,
    });
    setOpen(false)
  }

  const handleClean = () => {
    setInfo({
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  return (
    <div className="form-video">
      <h1 className="form-title">Crear Tarjeta</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="titulo del video"
            value={info.title}
            onChange={(e) =>
              setInfo((prevState) => {
                return {
                  ...prevState,
                  [e.target.name]: e.target.value,
                };
              })
            }
          />
        </div>
        <div className="input">
          <label htmlFor="category">Categoria</label>
          <select
            type="text"
            name="category"
            id="category"
            placeholder="Inserte una categoria"
            value={info.category}
            onChange={(e) =>
              setInfo((prevState) => {
                return {
                  ...prevState,
                  [e.target.name]: e.target.value,
                };
              })
            }
          >
            <option value="" disabled>
              --Selecione una categoria
            </option>
            <option value="front end">front end</option>
            <option value="back end">back end</option>
            <option value="innovacion y gestion">innovacion y gestón</option>
          </select>
        </div>

        <div className="input">
          <label htmlFor="image">Link de imagen</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="link de la imagen"
            value={info.image}
            onChange={(e) =>
              setInfo((prevState) => {
                return {
                  ...prevState,
                  [e.target.name]: e.target.value,
                };
              })
            }
          />
        </div>

        <div className="input">
          <label htmlFor="video">Link de video</label>
          <input
            type="text"
            name="video"
            id="video"
            placeholder="link del video"
            value={info.video}
            onChange={(e) =>
              setInfo((prevState) => {
                return {
                  ...prevState,
                  [e.target.name]: e.target.value,
                };
              })
            }
          />
        </div>
        <div className="input">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            id="description"
            placeholder="ingresa un description"
            value={info.description}
            onChange={(e) =>
              setInfo((prevState) => {
                return {
                  ...prevState,
                  [e.target.name]: e.target.value,
                };
              })
            }
          ></textarea>
        </div>

        <div className="buttons">
          <button type="submit">GUARDAR</button>
          <button type="button" onClick={() => handleClean()}>
            LIMPIAR
          </button>
        </div>
      </form>
    </div>
  );
};

import { useState } from "react";
import "./formvideo.css";
import { useVideos } from "../../hooks/useVideos";

export const FormVideo = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const { submitVideo } = useVideos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !image || !video || !description) {
      return alert("Complete los campos");
    }
    submitVideo({ title, category, image, video, description });
    handleClean();
  };

  const handleClean = () => {
    setTitle("");
    setCategory("");
    setImage("");
    setVideo("");
    setDescription("");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="category">Categoria</label>
          <select
            type="text"
            name="category"
            id="category"
            placeholder="Inserte una categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              --Selecione una categoria
            </option>
            <option value="FrontEnd">front end</option>
            <option value="BackEnd">back end</option>
            <option value="Gestion">innovacion y gestón</option>
          </select>
        </div>

        <div className="input">
          <label htmlFor="image">Link de imagen</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="link de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="video">Link de video</label>
          <input
            type="text"
            name="video"
            id="video"
            placeholder="link del video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            id="description"
            placeholder="ingresa un description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

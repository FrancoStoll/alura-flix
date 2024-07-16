import "./formvideoedit.css";

export const FormVideoEdit = () => {
  return (
    <div className="form-video">
      <h1 className="form-title">Crear Tarjeta</h1>
      <form>
        <div className="input">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="titulo del video"
          />
        </div>
        <div className="input">
          <label htmlFor="category">Categoria</label>
          <select
            type="text"
            name="category"
            id="category"
            placeholder="Inserte una categoria"
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
          />
        </div>

        <div className="input">
          <label htmlFor="video">Link de video</label>
          <input
            type="text"
            name="video"
            id="video"
            placeholder="link del video"
          />
        </div>
        <div className="input">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            id="description"
            placeholder="ingresa un description"
          ></textarea>
        </div>

        <div className="buttons">
          <button>GUARDAR</button>
          <button>LIMPIAR</button>
        </div>
      </form>
    </div>
  );
};

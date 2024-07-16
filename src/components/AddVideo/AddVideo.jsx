import { FormVideo } from "../FormVideo/FromVideo";
import './addvideo.css'
export const AddVideo = () => {
  return (
    <div className="add-video">
      <div className="title">
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>

      <FormVideo />
    </div>
  );
};

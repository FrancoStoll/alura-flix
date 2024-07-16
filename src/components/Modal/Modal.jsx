import {FormVideoEdit} from '../FormVideoEdit/FromVideoEdit'
import { useModal } from "../../hooks/useModal";
import "./modal.css";
import cross from "../../assets/cross.svg";

export const Modal = () => {
  const { open, setOpen } = useModal();
  return (
    <div className="modal">
      {open && (
        <>
          <div className="overlay-modal" />
          <dialog className="dialog" open={open}>
            <img className="cerrar" src={cross} alt="cerrar" onClick={() => setOpen(false)} />
            <FormVideoEdit />
          </dialog>
        </>
      )}
    </div>
  );
};

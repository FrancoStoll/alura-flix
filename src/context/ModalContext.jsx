import { createContext, useState } from "react";

const ModalContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState();


  

  return (
    <ModalContext.Provider
      value={{
        open: open,
        setOpen: setOpen,
        modalVideo,
        setModalVideo
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

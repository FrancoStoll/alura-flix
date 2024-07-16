import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Modal } from "../components/Modal/Modal";

import { Navbar } from "../components/Navbar/Navbar";
import { Videos } from "../components/videos/Videos";
import { ModalProvider } from "../context/ModalContext";
import { VideosProvider } from "../context/VideosContext";

export const Home = () => {
  return (
    <VideosProvider>
      <ModalProvider>
        <div className="container">
          <Navbar />
          <HeroSection />
          <Videos />
          <Footer />
          <Modal />
        </div>
      </ModalProvider>
    </VideosProvider>
  );
};

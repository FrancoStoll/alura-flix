import { AddVideo } from "../components/AddVideo/AddVideo";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export const UploadVideos = () => {
  return (
    <div className="container">
      <Navbar />
      <AddVideo />
      <Footer />
    </div>
  );
};

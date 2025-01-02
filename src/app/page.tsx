// import Image from "next/image";
// import Navbar from "./components/navbar";
import List from "./components/list";



// import Navbar from './Navbar'; // Ensure the correct path to the Navbar component

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <div className="flex flex-col items-center mt-2 w-full">
        <div className="w-full">
          <iframe
            className="w-full"
            style={{ height: 'calc(100vh - 100px)' }} // Adjust the height to fit the screen
            src="https://www.youtube.com/embed/geFi-ZpN2ZM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full mt-4">
          <List />
        </div>
      </div>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

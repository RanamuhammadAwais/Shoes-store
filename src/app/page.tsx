import List from "./components/list";
import Belowvideo from "./components/belowvideo";
import Belowlist from "./components/belowlist";
import Abovefooter from "./components/abovefooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-2 w-full bg-white">
        <div className="relative w-full" style={{ height: 'calc(100vh - 100px)' }}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_68Y1MJAZUg?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">WINTER MAGIC</h1>
            <p className="text-2xl mb-4">Santoni invites you into the wonder of winter</p>
            <div className="flex space-x-4">
              <button className="underline text-white px-4 py-2 rounded">FOR HIM</button>
              <button className="underline text-white px-4 py-2 rounded">FOR HER</button>
            </div>
          </div>
        </div>
        <div>
          <Belowvideo />
        </div>

        <div className="w-full mt-4">
          <List />
        </div>

        <div>
          <Belowlist/>
        </div>

        <div>
          <Abovefooter/>
        </div>

      </div>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

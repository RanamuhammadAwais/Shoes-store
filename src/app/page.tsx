import List from "./components/list";
import Belowvideo from "./components/belowvideo";
import Belowlist from "./components/belowlist";
import Abovefooter from "./components/abovefooter";
import Link from "next/link";
// import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-2 w-full bg-white">
        <div className="relative w-full" style={{ height: 'calc(100vh - 80px)' }}>
          <video
            className="w-full h-full object-cover"
            src="/video2.mp4" // Ensure the path is correct
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">WINTER MAGIC</h1>
            <p className="text-2xl mb-4">Santoni invites you into the wonder of winter</p>
            <div className="flex space-x-4">
              <Link href='/MAN'><button className="underline text-white px-4 py-2 rounded">FOR HIM</button></Link>
              <Link href='/WOMAN'><button className="underline text-white px-4 py-2 rounded">FOR HER</button></Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          <Belowvideo />
        </div>

        <div className="w-full mt-4">
          <List />
        </div>

        <div className="w-full mt-4">
          <Belowlist />
        </div>

        <div className="w-full mt-4">
          <Abovefooter />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

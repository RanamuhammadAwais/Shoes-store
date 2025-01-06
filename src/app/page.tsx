// import List from "./components/list";
// import Belowvideo from "./components/belowvideo";
// import Belowlist from "./components/belowlist";
// import Abovefooter from "./components/abovefooter";
// import Link from "next/link";
// // import Footer from "./components/footer";

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <div className="flex flex-col items-center mt-2 w-full bg-white">
//         <div className="relative w-full" style={{ height: 'calc(100vh - 80px)' }}>
//           <video
//             className="w-full h-full object-cover"
//             src="/video2.mp4" // Ensure the path is correct
//             autoPlay
//             loop
//             muted
//           ></video>
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//             <h1 className="text-4xl font-bold mb-4">WINTER MAGIC</h1>
//             <p className="text-2xl mb-4">Santoni invites you into the wonder of winter</p>
//             <div className="flex space-x-4">
//               <Link href='/MAN'><button className="underline text-white px-4 py-2 rounded">FOR HIM</button></Link>
//               <Link href='/WOMAN'><button className="underline text-white px-4 py-2 rounded">FOR HER</button></Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full mt-4">
//           <Belowvideo />
//         </div>

//         <div className="w-full mt-4">
//           <List />
//         </div>

//         <div className="w-full mt-4">
//           <Belowlist />
//         </div>

//         <div className="w-full mt-4">
//           <Abovefooter />
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// }

























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
        {/* Video Section */}
        <div className="relative w-full" style={{ height: 'calc(100vh - 80px)' }}>
          <video
            className="w-full h-full object-cover"
            src="/video2.mp4" // Ensure the path is correct
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">WINTER MAGIC</h1>
            <p className="text-xl md:text-2xl mb-4 text-center">Santoni invites you into the wonder of winter</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="/MAN">
                <button className="underline text-white px-6 py-2 rounded border border-white hover:bg-white hover:text-black">
                  FOR HIM
                </button>
              </Link>
              <Link href="/WOMAN">
                <button className="underline text-white px-6 py-2 rounded border border-white hover:bg-white hover:text-black">
                  FOR HER
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Below Video Section */}
        <div className="w-full mt-4 px-2 md:px-8">
          <Belowvideo />
        </div>

        {/* List Section */}
        <div className="w-full mt-4 px-2 md:px-8">
          <List />
        </div>

        {/* Below List Section */}
        <div className="w-full mt-4 px-2 md:px-8">
          <Belowlist />
        </div>

        {/* Above Footer Section */}
        <div className="w-full mt-4 px-2 md:px-8">
          <Abovefooter />
        </div>
      </div>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

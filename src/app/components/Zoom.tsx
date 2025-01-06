'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function Zoom() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full p-8 bg-gray-50 min-h-screen">
      {/* Overlay for Zoomed Image */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleZoomToggle}
        >
          <Image
            className="rounded-lg shadow-md transition-transform duration-300 scale-100 cursor-zoom-out"
            src="/Woman/w.webp"
            alt="Women's beige suede hiking boot"
            width={700}
            height={500}
            priority
          />
        </div>
      )}

      {/* Image Section */}
      <div
        className={`flex-shrink-0 relative group ${
          isZoomed ? 'hidden' : 'block'
        }`}
      >
        <Image
          className="rounded-lg shadow-md transition-transform duration-300 scale-100 cursor-zoom-in"
          src="/Woman/w.webp"
          alt="Women's beige suede hiking boot"
          width={500}
          height={680}
          priority
          onClick={handleZoomToggle}
        />
      </div>

      {/* Text Section */}
      <div className={`lg:w-1/2 p-6 ${isZoomed ? 'hidden' : 'block'}`}>
        <h1 className="text-3xl font-bold mb-4">Women's Beige Suede Hiking Boot</h1>
        <p className="text-xl font-semibold text-gray-700 mb-6">US$ 1,130.00</p>
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-md text-gray-600 mb-8">
          Functional design meets meticulous attention to detail: step into this Santoni ankle boot and add an exclusive touch to your off-duty edit. Crafted from suede with a lightly padded collar and tongue, this style fastens with cross-over laces as a subtle nod to the world of mountaineering, enhanced with a practical inner side zip. A rubber lug sole delivers optimal grip, customised with contrast details that reveal a flash of signature Santoni orange with each stride.
        </p>
        <button className="px-6 py-3 bg-black text-white font-bold text-lg rounded hover:bg-gray-800 transition">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Zoom;








// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/router';

// function Zoom() {
//   const [isZoomed, setIsZoomed] = useState(false);
//   const router = useRouter();
//   const src = Array.isArray(router.query.src) ? router.query.src[0] : router.query.src; // Ensure src is a string

//   const handleZoomToggle = () => {
//     setIsZoomed(!isZoomed);
//   };

//   return (
//     <div className="relative flex flex-col lg:flex-row items-center justify-between w-full p-8 bg-gray-50 min-h-screen">
//       {/* Overlay for Zoomed Image */}
//       {isZoomed && src && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//           onClick={handleZoomToggle}
//         >
//           <Image
//             className="rounded-lg shadow-md transition-transform duration-300 scale-100 cursor-zoom-out"
//             src={src}
//             alt="Zoomed Image"
//             width={700}
//             height={500}
//             priority
//           />
//         </div>
//       )}

//       {/* Image Section */}
//       <div
//         className={`flex-shrink-0 relative group ${isZoomed ? 'hidden' : 'block'}`}
//       >
//         {src && (
//           <Image
//             className="rounded-lg shadow-md transition-transform duration-300 scale-100 cursor-zoom-in"
//             src={src}
//             alt="Zoomed Image"
//             width={500}
//             height={680}
//             priority
//             onClick={handleZoomToggle}
//           />
//         )}
//       </div>

//       {/* Text Section */}
//       <div className={`lg:w-1/2 p-6 ${isZoomed ? 'hidden' : 'block'}`}>
//         <h1 className="text-3xl font-bold mb-4">Zoomed Product</h1>
//         <button
//           className="px-6 py-3 bg-black text-white font-bold text-lg rounded hover:bg-gray-800 transition"
//           onClick={() => router.back()}
//         >
//           Go Back
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Zoom;



// /
// import Image from 'next/image';

// function BelowVideo() {
//   return (
//     <div className="reletive flex justify-between items-center w-full bg-white-50 ">
//       <Image
//         className="m-2"
//         src="/mocasions.webp"
//         alt="Next.js logo"
//         width={700}
//         height={500}
//         priority
//       />
//       <Image
//         className="m-2"
//         src="/chel.webp"
//         alt="Next.js logo"
//         width={700}
//         height={500}
//         priority
//       />
//     </div>
//   );
// }

// export default BelowVideo;








import Image from 'next/image';

function BelowVideo() {
  return (
    <div className="relative flex flex-wrap justify-center lg:justify-between items-center w-full bg-white-50">
  <Image
    className="m-2"
    src="/mocasions.webp"
    alt="Next.js logo"
    layout="intrinsic"
    width={700}
    height={500}
    priority
  />
  <Image
    className="m-2"
    src="/chel.webp"
    alt="Next.js logo"
    layout="intrinsic"
    width={700}
    height={500}
    priority
  />
</div>

  );
}

export default BelowVideo;
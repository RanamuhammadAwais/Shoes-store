// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// function Man() {
//   return (
//     <div className="flex justify-between items-center">
//       <div className="relative group">
        
//        <Link href='/Zoom'>
//         <button>
//         <Image
//           className="pl-10 group-hover:hidden"
//           src="/parrot.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         <Image
//           className="pl-10 hidden group-hover:block"
//           src="/man.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         </button>
//         </Link>
//         <div className="mt-4 text-center">
//           <p>Man Gray Chelsea Shoe</p>
//           <p className="text-md text-gray-500">Price: $500</p>
//         </div>
//       </div>

//       <div className="relative group">
//         <Image
//           className="pl-10 group-hover:hidden"
//           src="/mocasions.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         <Image
//           className="pl-10 hidden group-hover:block"
//           src="/chel.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         <div className="mt-4 text-center">
//           <p>Man Gray Chelsea Shoe</p>
//           <p className="text-md text-gray-500">Price: $500</p>
//         </div>
//       </div>

//       <div className="relative group">
//         <Image
//           className="pl-10 group-hover:hidden"
//           src="/brown.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         <Image
//           className="pl-10 hidden group-hover:block"
//           src="/black.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         <div className="mt-4 text-center">
//           <p>Man Gray Chelsea Shoe</p>
//           <p className="text-md text-gray-500">Price: $500</p>
//         </div>
//       </div>

//       <div className="relative group">
//         <Image
//           className="pl-10 group-hover:hidden"
//           src="/chel.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         <Image
//           className="pl-10 hidden group-hover:block"
//           src="/suede.webp"
//           alt="Next.js logo"
//           width={500}
//           height={680}
//           priority
//         />
//         <div className="mt-4 text-center">
//           <p>Man Gray Chelsea Shoe</p>
//           <p className="text-md text-gray-500">Price: $500</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Man;











import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Man() {
  const products = [
    { src: '/parrot.webp', hoverSrc: '/man.webp', title: 'Man Gray Chelsea Shoe', price: '$500' },
    { src: '/mocasions.webp', hoverSrc: '/chel.webp', title: 'Man Gray Chelsea Shoe', price: '$500' },
    { src: '/brown.webp', hoverSrc: '/black.webp', title: 'Man Gray Chelsea Shoe', price: '$500' },
    { src: '/chel.webp', hoverSrc: '/suede.webp', title: 'Man Gray Chelsea Shoe', price: '$500' },
  ];

  return (
    <div className="flex justify-between items-center">
      {products.map((product, index) => (
        <div key={index} className="relative group">
          <Link href={{ pathname: '/Zoom', query: { src: product.src } }}>
            <Image
              className="pl-10 group-hover:hidden"
              src={product.src}
              alt={product.title}
              width={500}
              height={680}
              priority
            />
            <Image
              className="pl-10 hidden group-hover:block"
              src={product.hoverSrc}
              alt={product.title}
              width={500}
              height={680}
              priority
            />
          </Link>
          <div className="mt-4 text-center">
            <p>{product.title}</p>
            <p className="text-md text-gray-500">Price: {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Man;

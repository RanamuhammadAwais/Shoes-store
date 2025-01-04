import React from 'react';
import Image from 'next/image';

function ShoeCare() {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="relative group">
        <Image
          className="pl-10 group-hover:hidden"
          src="/ShoeCare/s.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/ShoeCare/s1.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <div className="mt-4 text-center">
          <p>Man Gray Chelsea Shoe</p>
          <p className="text-md text-gray-500">Price: $500</p>
        </div>
      </div>

      <div className="relative group">
        <Image
          className="pl-10 group-hover:hidden"
          src="/ShoeCare/s1.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/ShoeCare/sh1.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <div className="mt-4 text-center">
          <p>Man Gray Chelsea Shoe</p>
          <p className="text-md text-gray-500">Price: $500</p>
        </div>
      </div>

      <div className="relative group">
        <Image
          className="pl-10 group-hover:hidden"
          src="/ShoeCare/s.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/ShoeCare/sho1.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <div className="mt-4 text-center">
          <p>Man Gray Chelsea Shoe</p>
          <p className="text-md text-gray-500">Price: $500</p>
        </div>
      </div>

      <div className="relative group">
        <Image
          className="pl-10 group-hover:hidden"
          src="/ShoeCare/s1.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/ShoeCare/s.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <div className="mt-4 text-center">
          <p>Man Gray Chelsea Shoe</p>
          <p className="text-md text-gray-500">Price: $500</p>
        </div>
      </div>
    </div>
  );
}

export default ShoeCare;

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative group">
        <Image
          className="pl-10 group-hover:hidden"
          src="/parrot.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/man.webp"
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
          src="/mocasions.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/chel.webp"
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
          src="/brown.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/black.webp"
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
          src="/chel.webp"
          alt="Next.js logo"
          width={500}
          height={680}
          priority
        />
        <Image
          className="pl-10 hidden group-hover:block"
          src="/suede.webp"
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

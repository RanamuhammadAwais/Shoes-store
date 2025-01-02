import Image from 'next/image';

function BelowVideo() {
  return (
    <div className="flex justify-between items-center w-full bg-blue-50">
      <Image
        className="m-2"
        src="/mocasions.webp"
        alt="Next.js logo"
        width={430}
        height={500}
        priority
      />
      <Image
        className="m-2"
        src="/chel.webp"
        alt="Next.js logo"
        width={430}
        height={500}
        priority
      />

<Image
        className="m-2"
        src="/suede.webp"
        alt="Next.js logo"
        width={430}
        height={500}
        priority
      />
    </div>
  );
}

export default BelowVideo;

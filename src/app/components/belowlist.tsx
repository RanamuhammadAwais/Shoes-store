import Image from 'next/image';

function BelowVideo() {
  return (
    <div className="flex justify-between items-center w-full bg-blue-50">
      <Image
        className="m-2 transform transition-transform duration-300 hover:scale-110"
        src="/Woman/w.webp"
        alt="Next.js logo"
        width={430}
        height={500}
        priority
      />
      <Image
        className="m-2 transform transition-transform duration-300 hover:scale-110"
        src="/Woman/wo1.webp"
        alt="Next.js logo"
        width={430}
        height={500}
        priority
      />

<Image
        className="m-2 transform transition-transform duration-300 hover:scale-110"
        src="/Woman/wom.webp"
        alt="Next.js logo"
        width={430}
        height={500}
        priority
      />
    </div>
  );
}

export default BelowVideo;

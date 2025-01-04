import Image from 'next/image';

function BelowVideo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-blue-50">
      <Image
        className="transform transition-transform duration-300 hover:scale-110"
        src="/Woman/w.webp"
        alt="Image 1"
        width={500}
        height={680}
        priority
      />
      <Image
        className="transform transition-transform duration-500 hover:scale-110"
        src="/Woman/wo1.webp"
        alt="Image 2"
        width={500}
        height={680}
        priority
      />
      <Image
        className="transform transition-transform duration-500 hover:scale-110"
        src="/Woman/wom.webp"
        alt="Image 3"
        width={500}
        height={680}
        priority
      />
      <Image
        className="transform transition-transform duration-500 hover:scale-110"
        src="/Woman/wo1.webp"
        alt="Image 4"
        width={500}
        height={680}
        priority
      />
    </div>
  );
}

export default BelowVideo;

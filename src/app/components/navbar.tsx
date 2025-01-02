import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <ul className="flex">
        <li className="mr-8">
        <Image
            className="mr-4"
            aria-hidden
            src="/logo.svg"
            alt="Search icon"
            width={136}
            height={136} /> </li>
          <li className="mr-8">NEW ARRIVALS</li>
          <li className="mr-8">SALE</li>
          <li className="mr-8">MAN</li>
          <li className="mr-8">WOMAN</li>
          <li className="mr-8">SHOE CARE</li>
          <li className="mr-8">PERSONALIZATION</li>
          <li className="mr-8">CULTURE</li>
        </ul>

        <div className="flex items-center">
          {/* <Image
            className="mr-4 bg-gray-50"
            aria-hidden
            src="/search.svg"
            alt="Search icon"
            width={36}
            height={16}
          /> */}
          <Image
            className="mr-4"
            aria-hidden
            src="/hear.svg"
            alt="Heart icon"
            width={36}
            height={16}
          />
          <Image
            className="mr-4"
            aria-hidden
            src="/person.svg"
            alt="Person icon"
            width={36}
            height={16}
          />
          <Image
            className="mr-4"
            aria-hidden
            src="/shopping.svg"
            alt="Shopping icon"
            width={36}
            height={16}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

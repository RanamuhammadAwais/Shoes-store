// import { FC } from 'react';
// import Image from 'next/image';
// import MAN from '../MAN/page';
// import Link from 'next/link';
// import WoMan from '../WOMAN/page'
// import Narrival from '@/app/NARRIVALS/page'



// const Navbar: FC = () => {
//   return (
//     <nav className="bg-blue-100 p-4">
//       <div className="flex justify-between items-center">
//         <ul className="flex items-center">
//           <li className="mr-8">
//             <Image
//               className="mr-4"
//               src="/logo.svg"
//               alt="Logo"
//               width={136}
//               height={136}
//             />
//           </li>
//           <li className="mr-8"><Link href='NARRIVAL'>  <button>NEW ARRIVAL</button></Link></li>
//           <li className="mr-8">SALE</li>
//           <li className="mr-8"><Link href='MAN'>  <button>MAN</button></Link></li>
//           <li className="mr-8"><Link href='WOMAN'>  <button>WOMAN</button></Link></li>
//           <li className="mr-8">SHOE CARE</li>
//           <li className="mr-8">PERSONALIZATION</li>
//           <li className="mr-8">CULTURE</li>
//         </ul>

//         <div className="flex items-center">
//           {/* Uncomment and ensure the correct path for search.svg */}
//           {/* <Image
//             className="mr-4 bg-gray-50"
//             aria-hidden
//             src="/search.svg"
//             alt="Search icon"
//             width={36}
//             height={36}
//           /> */}
//           <Image
//             className="mr-4"
//             aria-hidden
//             src="/hear.svg"
//             alt="Heart icon"
//             width={36}
//             height={36}
//           />
//           <Image
//             className="mr-4"
//             aria-hidden
//             src="/person.svg"
//             alt="Person icon"
//             width={36}
//             height={36} 
//           />
//           <Image
//             className="mr-4"
//             aria-hidden
//             src="/shopping.svg"
//             alt="Shopping icon"
//             width={36}
//             height={36}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;











import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: FC = () => {
  return (
    <nav className="bg-blue-100 p-4">
      <div className="flex justify-between items-center">
        <ul className="flex items-center">
          <li className="mr-8">
            <Link href="/">
            <Image
              className="mr-4"
              src="/logo.svg"
              alt="Logo"
              width={136}
              height={136}
            />
            </Link>
          </li>
          <li className="mr-8">
            <Link href="/NARRIVALS">
              <button>NEW ARRIVAL</button>
            </Link>
          </li>
          <li className="mr-8"><Link href="/Sale"><button>SALE</button></Link></li>
          <li className="mr-8">
            <Link href="/MAN">
              <button>MAN</button>
            </Link>
          </li>
          <li className="mr-8">
            <Link href="/WOMAN">
              <button>WOMAN</button>
            </Link>
          </li>
          <li className="mr-8">
            <Link href="/ShoeCare">
              <button>SHOE CARE</button>
            </Link>
          </li>

          
          {/* <li className="mr-8">PERSONALIZATION</li>
          <li className="mr-8">CULTURE</li> */}
        </ul>

        <div className="flex items-center">
          <Image
            className="mr-4"
            aria-hidden
            src="/hear.svg"
            alt="Heart icon"
            width={36}
            height={36}
          />
          <Image
            className="mr-4"
            aria-hidden
            src="/person.svg"
            alt="Person icon"
            width={36}
            height={36}
          />
          <Image
            className="mr-4"
            aria-hidden
            src="/shopping.svg"
            alt="Shopping icon"
            width={36}
            height={36}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

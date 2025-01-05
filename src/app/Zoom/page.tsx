// import React from 'react'
// import Sale from '../components/Sale'
// import Zoom from '../components/Zoom'

// function page() {
//   return (
//     <div>
//         <Zoom/>
//     </div>
//   )
// }

// export default page


import dynamic from 'next/dynamic';

const Zoom = dynamic(() => import('../components/Zoom'), { ssr: false });

export default Zoom;

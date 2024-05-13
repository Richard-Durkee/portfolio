// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
import useState from 'react';
import Image from 'next/image';
import DriverAIHome from '/public/images/Driver-AI-1-Home.webp'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { 
      name: 'Driver AI', 
      href: '/projects/driver-ai', 
    // icon: HomeIcon 
    },
    {
      name: 'SpotHouse',
      href: '/projects/spothouse',
      // icon: DocumentDuplicateIcon,
    },
    { 
        name: 'BoardGameGeek Redesign', 
        href: 'projects/boardgamegeek', 
        // icon: UserGroupIcon,
    },
];
 
export default function ProjectLinks() {
  return (
    <>

      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <div key={link.name}>
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-white font-medium hover:bg-sky-100 hover:text-blue-600 mx-5"
            >
              <p className="">{"> " + link.name}</p>
              {/* <Image src={DriverAIHome}></Image> */}
              
              
            </Link>
          </div>
        );
      })}
    </>
  );
}
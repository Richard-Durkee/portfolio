// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
import useState from 'react';
import Image from 'next/image';
import DriverAILogo from '/public/images/driver-ai/Driver-AI-Logo.jpeg';
import SpothouseLogo from '/public/images/spothouse/spothouse-logo.png';
import BGGLogo from '/public/images/boardgamegeek/BoardGameGeek-Logo.png';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { 
      name: 'Driver AI', 
      href: '/projects/driver-ai', 
      image: DriverAILogo,
      alt: "",
    },
    {
      name: 'SpotHouse',
      href: '/projects/spothouse',
      image: SpothouseLogo,
      alt: "",
    },
    { 
      name: 'BoardGameGeek Redesign', 
      href: 'projects/boardgamegeek', 
      image: BGGLogo,
      alt: "",
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
              className="flex h-[150px] grow items-center gap-2 rounded-md p-3 text-sm text-white font-medium hover:bg-sky-100 hover:text-blue-600 mx-5"
            >
              <div className='flex w-full h-full items-center overflow-hidden justify-between'>
                <p className="">{"> " + link.name}</p>
                <div className="">
                  <Image src={link.image} alt={link.alt} className="w-[100px] h-[100px] rounded-3xl" />
                </div>
              </div>
              
            </Link>
          </div>
        );
      })}
    </>
  );
}
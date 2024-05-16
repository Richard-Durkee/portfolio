// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
import useState from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { 
      name: 'Home', 
      href: '/', 
    // icon: HomeIcon 
    },
    {
      name: 'About Me',
      href: '/about-me',
      // icon: DocumentDuplicateIcon,
    },
    // { 
    //     name: 'Resume', 
    //     href: '/resume', 
    //     // icon: UserGroupIcon,
    // },
    { 
        name: 'Projects', 
        href: '/projects', 
        // icon: UserGroupIcon,
    },
    // { 
    //   name: 'Design', 
    //   href: '/design', 
    //   // icon: UserGroupIcon,
    // },
];
 
export default function NavLinks() {
  return (
    <>
      <div className='flex flex-col sm:flex-row mb-auto'> 
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-white font-medium hover:bg-sky-100 hover:text-blue-600 sm:mx-3 md:mx-4 lg:mx-5"
          >
            {/* <LinkIcon className="w-6" /> */}
            <p>{link.name}</p>
          </Link>
        );
      })}
      </div>
    </>
  );
}
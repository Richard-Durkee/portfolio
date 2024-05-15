// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
import useState from 'react';
import Image from 'next/image';

interface Block {
    image: string;
    alt: string;
    heading: string;
    text: string;
  }
  
interface Props {
    content: Block[];
}

export default function Content({ content }: Props) {
    
  return (
    <>
      {content.map((block, index) => {
        if (index % 2 === 0) {
            return (
                <>
                    <div key={index} className='flex flex-col sm:flex-row items-center md:space-x-8 space-y-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-shrink-0 md:max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                            <Image src={`${block.image}`} alt={block.alt} width={500} height={500}/>
                        </div>
                        <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> {block.heading} </h2>
                            <p className="text-gray-200 max-h-[500px] overflow-auto mb-4"> {block.text} </p>
                        </div>
                    </div>
                </>
            );
        }
        else {
            return (
                <div key={index} className='flex flex-col sm:flex-row items-center md:space-x-8 space-y-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                    <div className='flex-grow'>
                        <h2 className='text-xl mb-4'> {block.heading} </h2>
                        <p className="text-gray-200 max-h-[500px] overflow-auto mb-4"> {block.text} </p>
                    </div>
                    <div className='flex-shrink-0 md:max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                        <Image src={block.image} alt={block.alt} width={500} height={500}/>
                    </div>
                </div>
            );
        }
      })}
    </>
  );
}
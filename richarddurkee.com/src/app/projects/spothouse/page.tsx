import Image from 'next/image';
import Content from '@/app/content';
import SpothouseContent from '../../../../public/content/spothouse-content.json'

export default function Page() {
    return (
        <div>
          <h1 className='text-2xl mb-4'> SpotHouse</h1>
          <Content content={SpothouseContent}></Content>
        </div>
    );
  }
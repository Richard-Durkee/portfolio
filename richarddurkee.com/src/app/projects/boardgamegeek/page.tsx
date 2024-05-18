import Image from 'next/image';
import Content from '@/app/content';
import BGGContent from '../../../../public/content/boardgamegeek-content.json'

export default function Page() {
    return (
        <div>
          <h1 className='text-2xl mb-4'> BoardGameGeek Redesign </h1>
          <Content content={BGGContent}></Content>
        </div>
    );
  }
import Image from 'next/image';
import HeadShot from '/public/images/about-me/headshot.jpeg';

export default function Page() {
    return (
      <div> 
        <h1 className='text-xl mb-4'>About Me</h1>
        <Image src={HeadShot} alt="Headshot" className='rounded-3xl'/>
      </div>);
  }
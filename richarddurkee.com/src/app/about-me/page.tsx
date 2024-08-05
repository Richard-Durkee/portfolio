import Image from 'next/image';
import HeadShot from '/public/images/about-me/headshot.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me"
};

export default function Page() {
    return (
      <div> 
        <h1 className='text-xl mb-4'>About Me</h1>
        <div className='flex flex-col md:flex-row items-center'>
          <Image src={HeadShot} alt="Headshot" className='rounded-3xl max-w-[50%] m-4'/>
          <p className=''> My name is Richard F. Durkee, and I am curious, user-focused, and self-motivated. relying on self-taught methods to realize my passion projects, alone I set-up my small-scale server and began configuration for novel operations, excitedly and securely hosting burner websites and creating a streaming device. My wondering self-instruction taught me the foundation of transcoding in microserver networks. </p>
        </div>
      </div>);
  }
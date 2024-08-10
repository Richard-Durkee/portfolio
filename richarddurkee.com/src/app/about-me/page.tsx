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
          <div className='flex flex-row md:flex-row items-center'>
            <p> I am passionate about optimizing code for performance and efficiency, with a particular focus on low-latency applications. As a computer science concentrator at Brown University specializing in systems programming, I am exploring media processing applications, particularly real-time systems in video streaming and audio processing. My interests also encompass operating systems, distributed systems, and, more recently, graphics programming. </p>
            <p> C++ is the first tool I reach for when solving low-level, complex systems problems, with C and Go as strong secondary languages. I strive to be language-agnostic, with proficiency in scripting languages like Python and Lua, and functional languages such as Lisp, Racket, and OCaml. Additionally, I have professional experience with large codebases in Java, JavaScript, and TypeScript, using frameworks like Angular, React, and Struts.  </p>
            <p> At the ATLAS Research Lab at Brown University, I am developing tools to profile and optimize microservice architectures, with a focus on improving response times and reducing latency. I have also received a UTRA research funding award for Fall 2024 to work with Professor Steven Reiss on integrating Large Language Model capabilities into Code Bubbles, an IDE that has been under development for over a decade.  </p>
          </div>
        </div>
      </div>);
  }

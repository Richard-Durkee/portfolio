import Link from "next/link";
import BasicTimeline from "../timeline";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resume"
};

export default function Page() {
    return (
      <div>
        <p>Resume</p>
        <div className="flex flex-col w-[50%] justify-center"> 
          <Link
            href="/pdfs/richard-durkee-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[50%] h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-white font-medium hover:bg-sky-100 hover:text-blue-600 sm:mx-3 md:mx-4 lg:mx-5"
          >Download File</Link>
          <BasicTimeline></BasicTimeline>
        </div>
        
      </div>
    );
  }
import ProjectLinks from "./projects-nav-links";
import BasicTimeline from "../timeline";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects"
};


export default function Page() {
    return (
      <div>
        <p className="mb-4">Projects</p>
        <ProjectLinks></ProjectLinks>
      </div>
      
    );
  }
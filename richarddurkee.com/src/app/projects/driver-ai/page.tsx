import Image from 'next/image';
import DriverAIHome from '/public/images/driver-ai/Driver-AI-1-Home.webp'
import DriverAIWorkspaces from '/public/images/driver-ai/Driver-AI-2-Workspaces.webp';
import DriverAICodebases from '/public/images/driver-ai/Driver-AI-3-Codebases.webp'
import DriverAICodebaseDocs from '/public/images/driver-ai/Driver-AI-4-Codebase-Docs.webp'
import DriverAIFirstWireframeNotes from '/public/images/driver-ai/Driver-AI-5-First-Wireframe-Discussion.webp';
import DriverAIHifiStyleGuide from "/public/images/driver-ai/Driver-AI-6-Hifi-Style-Guide.webp"
import DriverAIFounderFeedback from "/public/images/driver-ai/Driver-AI-7-Founder-Feedback.webp"
import DriverAIFinalWorkspaces from "/public/images/driver-ai/Driver-AI-8-Final-Workspaces.webp"
import DriverAIFinalCodebases from "/public/images/driver-ai/Driver-AI-9-Final-Codebases.webp"
import DriverAIFinalCodebaseDocs from "/public/images/driver-ai/Driver-AI-Final-Codebase-Docs.webp"
import DriverAIEarthSketches from "/public/images/driver-ai/Driver-AI-Earth-Sketches.webp"
import DriverAIKeyanSketches from "/public/images/driver-ai/Driver-AI-Keyan-Sketches.webp"
import DriverAIRichardSketches from "/public/images/driver-ai/Driver-AI-Richard-Sketches.webp"
import DriverAITrumanSketches from "/public/images/driver-ai/Driver-AI-Truman-Sketches.webp"
import Content from '@/app/content';
import DriverAIContent from '../../../../public/content/driver-ai-content.json'

export default function Page() {
    return (
        <div>
          <h1 className='text-2xl mb-4'> SpotHouse</h1>
          <Content content={DriverAIContent}></Content>
        </div>
    );
  }
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Image from 'next/image';
import FidelityLogo from '../../public/images/fidelity-logo.jpg'

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> Crown Castle </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" >
            <Image className="max-w-max w-10 h-10 rounded-full overflow-hidden" src={FidelityLogo} alt="Fidelity Logo" width={50} height={50}  objectFit="cover" quality={100}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Fidelity</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        
        <TimelineContent>Fidelity</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
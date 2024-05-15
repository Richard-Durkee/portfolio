import Image from 'next/image';
import SpotHouseLogo from '/public/images/spothouse/spothouse-logo.png'
import SpotHouseHost from '/public/images/spothouse/spothouse-host.png';
import SpotHouseGuest from '/public/images/spothouse/spothouse-guest.png'
import SpotHouseSigmoidEquation from '/public/images/spothouse/spothouse-sigmoid-equation.png'
import SpotHouseSigmoidGraph from '/public/images/spothouse/spothouse-sigmoid-graph.png';
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
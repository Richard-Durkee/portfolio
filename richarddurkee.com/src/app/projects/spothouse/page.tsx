import Image from 'next/image';
import SpotHouseLogo from '/public/images/spothouse/spothouse-logo.png'
import SpotHouseHost from '/public/images/spothouse/spothouse-host.png';
import SpotHouseGuest from '/public/images/spothouse/spothouse-guest.png'
import SpotHouseSigmoidEquation from '/public/images/spothouse/spothouse-sigmoid-equation.png'
import SpotHouseSigmoidGraph from '/public/images/spothouse/spothouse-sigmoid-graph.png';

export default function Page() {
    return (
        <div>
          <div>            
              <p> These are my Low Fidelity Wireframes </p>
              <Image src={SpotHouseLogo} alt="First Lofi Wireframe"/>
              <Image src={SpotHouseHost} alt="Second Lofi Wireframe"/>
              <Image src={SpotHouseGuest} alt="Third Lofi Wireframe"/>

              <p> This is my Style Guide </p>
              <Image src={SpotHouseSigmoidEquation} alt=""/>

              <p> These are my High Fidelity Wireframes </p>
              <Image src={SpotHouseSigmoidGraph} alt=""/>
              
          </div>
            {/* <article>
                <h1 className='text-2xl mb-4'>Driver AI</h1>
                <div className='mb-4'>
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIHome} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>
                    
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIWorkspaces} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAICodebases} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAICodebaseDocs} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIEarthSketches} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIKeyanSketches} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAITrumanSketches} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIRichardSketches} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIFirstWireframeNotes} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIHifiStyleGuide} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIFounderFeedback} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIFinalWorkspaces} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIFinalCodebases} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                            <Image src={DriverAIFinalCodebaseDocs} alt='Original Homepage of Driver AI' />
                        </div>
                    </div>
                </div>             
            </article> */}
        </div>
    );
  }
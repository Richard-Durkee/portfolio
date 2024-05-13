import Image from 'next/image';
import BGGLofiWireframe1 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Lofi-Wireframe-1.jpg'
import BGGLofiWireframe2 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Lofi-Wireframe-2.jpg';
import BGGLofiWireframe3 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Lofi-Wireframe-3.jpg'
import BGGHifiWireframe1 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Hifi-Wireframe-1.jpg'
import BGGHifiWireframe2 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Hifi-Wireframe-2.jpg';
import BGGHifiWireframe3 from "/public/images/boardgamegeek/BoardGameGeek-Redesign-Hifi-Wireframe-3.jpg"
import BGGStyleGuide from "/public/images/boardgamegeek/BoardGameGeek-Redesign-Visual-Style-Design-Guide.jpg"

export default function Page() {
    return (
        <div>
          <div>
              <p> The Link for my Final Submission is:
                  https://richard-durkee.github.io/cs1300-BoardGameGeek-Responsive-Redesign/ </p>
              
              
              
              <p> These are my Low Fidelity Wireframes </p>
              <Image src={BGGLofiWireframe1} alt="First Lofi Wireframe"/>
              <Image src={BGGLofiWireframe2} alt="Second Lofi Wireframe"/>
              <Image src={BGGLofiWireframe3} alt="Third Lofi Wireframe"/>

              <p> This is my Style Guide </p>
              <Image src={BGGStyleGuide} alt=""/>

              <p> These are my High Fidelity Wireframes </p>
              <Image src={BGGHifiWireframe1} alt=""/>
              <Image src={BGGHifiWireframe2} alt=""/>
              <Image src={BGGHifiWireframe3} alt=""/>
              
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
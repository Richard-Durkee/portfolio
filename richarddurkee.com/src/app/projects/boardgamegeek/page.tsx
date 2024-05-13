import Image from 'next/image';
import BGGDashboard from '/public/images/boardgamegeek/BoardGameGeek-Dashboard.png';
import BGGLofiWireframe1 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Lofi-Wireframe-1.jpg'
import BGGLofiWireframe2 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Lofi-Wireframe-2.jpg';
import BGGLofiWireframe3 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Lofi-Wireframe-3.jpg'
import BGGHifiWireframe1 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Hifi-Wireframe-1.jpg'
import BGGHifiWireframe2 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Hifi-Wireframe-2.jpg';
import BGGHifiWireframe3 from "/public/images/boardgamegeek/BoardGameGeek-Redesign-Hifi-Wireframe-3.jpg"
import BGGStyleGuide from "/public/images/boardgamegeek/BoardGameGeek-Redesign-Visual-Style-Design-Guide.jpg"
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <article>
                <h1 className='text-2xl mb-4'>Board Game Geek Redesign</h1>
                {/* <Link src="https://boardgamegeek.com/dashboard" alt="BGG Site Link"> </Link>.  */}
                <div className='mb-4'>
                <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">This is the dashboard to one of my favorite websites, Board Game Geek:</p>
                            <p className='text-gray-200'> Although BGG rolled out a fairly recent update to improve the UI, this website has had a longstanding  reputation for being poorly designed and difficult to navigate, despite dominating the board game space and having significant influence on the hobbyist board game market.  </p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGDashboard} alt="First Lofi Wireframe"/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGLofiWireframe1} alt="First Lofi Wireframe"/>
                        </div>
                    </div>
                    
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGLofiWireframe2} alt="Second Lofi Wireframe"/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGLofiWireframe3} alt="Third Lofi Wireframe"/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGHifiWireframe1} alt=""/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGHifiWireframe2} alt=""/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGHifiWireframe3} alt=""/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%]'>
                        <Image src={BGGStyleGuide} alt=""/>
                        </div>
                    </div>
                </div>             
            </article>
        </div>
    );
  }
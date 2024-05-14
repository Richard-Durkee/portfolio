import Image from 'next/image';
import BGGDashboard from '/public/images/boardgamegeek/BoardGameGeek-Dashboard.png';
import BGGLofiWireframe1 from '/public/images/boardgamegeek/BoardGameGeek-Redesign-Lofi-Wireframe-1.jpg'
import BGGSpeedSketches from '/public/images/boardgamegeek/BoardGameGeek-Speed-Sketches.jpeg'
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
                            <p className="text-gray-200">This is the dashboard to one of my favorite websites, Board Game Geek. </p>
                            <p className='text-gray-200'> Although BGG rolled out a fairly recent update to improve the UI, this website has had a longstanding  reputation for being poorly designed and difficult to navigate, despite dominating the board game space and having significant influence on the hobbyist board game market.  </p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                        <Image src={BGGDashboard} alt="First Lofi Wireframe"/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGSpeedSketches} alt="First Lofi Wireframe"/>
                        </div>
                        <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> Speed Sketches </h2>
                            <p className="text-gray-200"> I started by speed sketching 9 different designs for the website. I used a technique I learned in an UI/UX course, dividing a notebook page into 9 small sections, and spending no longer than one minute sketching in each section. I tried to think outside the box as much as possible -- when brainstorming, I believe quantity can come over quality, because if you are not willing to consider unorthodox solutions, you might miss the best solution. </p>
                        </div>
                    </div>
                    

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGLofiWireframe1} alt="First Lofi Wireframe"/>
                        </div>
                        <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> First Low Fidelity Wireframes </h2>
                            <p className="text-gray-200"> I hoped to create a new dashboard that would improve upon the design of the original first by making it more clear what the different sections of the website are. I wanted it to be more obvious that more threads and information in a given section could be accessed by using a large arrow indicating to users that the shown threads were only a small preview of the total content.</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Hotness </h2>
                            <p className="text-gray-200">I also moved the Hotness, or section for the most trending board games, to the top of the page, in a hope to remove some visual clutter and give a larger preview of each game.</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGLofiWireframe2} alt="Second Lofi Wireframe"/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGLofiWireframe3} alt="Third Lofi Wireframe"/>
                        </div>
                        <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> Responsiveness </h2>
                            <p className="text-gray-200"> In both my low fidelity and high fidelity Figma wireframes, I strove to design a dashboard that would be responsive to various screen sizes and window dimensions. </p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGHifiWireframe1} alt=""/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGHifiWireframe2} alt=""/>
                        </div>
                        <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGHifiWireframe3} alt=""/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-8 bg-zinc-900 rounded-3xl p-9 mb-4'> 
                       <div className='flex-grow'>
                            <h2 className='text-xl mb-4'> The Concept </h2>
                            <p className="text-gray-200">One challenge that we encountered...</p>
                        </div>
                        <div className='flex-shrink-0 max-w-[50%] max-h-[500px] overflow-auto rounded-xl'>
                          <Image src={BGGStyleGuide} alt=""/>
                        </div>
                    </div>
                </div>             
            </article>
        </div>
    );
  }
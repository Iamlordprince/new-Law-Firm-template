import img9 from '../assets/img9.png';
import img8 from '../assets/img8.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';

function Cards({ img, heading, paragraph }){
    return (
        <div className="w-80 flex flex-col gap-3 items-center">
            <img src={img}
            className='rounded-xl border-b-amber-200 w-80 h-50'
            />
            <h1 className='font-serif text-xl'>{heading}</h1>
            <div className='h-0.5 w-7 bg-[#D9993F]'></div>
            <p className='text-center '>{paragraph}</p>
        </div>
        
    )
}
function Clear(){
    const cards = [
        {
            id:1,
            img: img9,
            heading: "Consultation",
            paragraph: "We listen to your concerns, understand your situation, and evaluate your case to provide clear guidance."
        },
        {
            id:2,
            img: img8,
            heading: "Strategy & Plan",
            paragraph: "Our team develops a customized legal strategy tailored to your goals and the specifics of your case."
        },
        {
            id:3,
            img: img10,
            heading: "Action & Representation",
            paragraph: "We take decisive action and advocate for your rights with dedication, skill, and attention to detail."
        },
        {
            id:4,
            img: img11,
            heading: "Resolution and Results",
            paragraph: "We work tirelessly to achieve the best possible outcome and provide support every step of the way."
        }
    ]
    return (
        <div className="w-full h-auto overflow-hidden bg-[#F9F8F6] flex flex-col mt-5 mb-10 items-center">
            <h1 className="text-2xl text-center font-serif md:text-6xl lg:text-7xl mt-10">A Clear Process</h1>
            <h1 className="text-2xl text-center font-serif md:text-6xl lg:text-7xl">Focused On <span className="text-[#D9993F]">Your Success.</span></h1>
            <div className="w-19 h-0.5 bg-[#D9993F] mt-5"></div>
            <p className="w-sm md:w-md lg:w-xl text-center mt-2 text-sm md:text-xl lg:text-xl">We follow a proven approach to deliver effective legal solutions that protect your rights and achieve the best possible outcomes.</p>
            <div className="hidden  md:flex items-center gap-9">
                <h1 className="text-6xl text-[#D9993F] shadow-2xl mt-4 p-4 rounded-full"><i className="ri-message-3-fill"></i></h1>
                <div className="w-40 border-t-3 border-dashed border-gray-400"></div>
                <h1 className="text-6xl text-[#D9993F] shadow-2xl mt-4 p-4 rounded-full"><i className="ri-file-search-line"></i></h1>
                <div className="w-40 border-t-3 border-dashed border-gray-400"></div>
                <h1 className="text-6xl text-[#D9993F] shadow-2xl mt-4 p-4 rounded-full"><i className="ri-scales-3-line"></i></h1>
                <div className="w-40 border-t-3 border-dashed border-gray-400"></div>
                <h1 className="text-6xl text-[#D9993F] shadow-2xl mt-4 p-4 rounded-full"><i className="ri-shield-check-line"></i></h1>
            </div>
            <div className='mt-8 flex flex-col md:grid-rows-2 lg:flex-row md:gap-5 lg:gap-9'>
                {cards.map((e) => (
                    <Cards
                    key={e.id}
                    img={e.img}
                    heading={e.heading}
                    paragraph={e.paragraph}
                    />
                ))}

            </div>
        </div>
    )
}
export default Clear;
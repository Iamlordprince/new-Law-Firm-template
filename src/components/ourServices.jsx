import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'

function Caards({ bgimg, icon, heading, paragraph }) {
    return (
        <div className='text-white w-full sm:w-[350px] lg:w-[350px] h-[520px] lg:h-[600px] flex flex-col items-center border-b-2 border-b-[#FAAB3C] border-l border-r rounded-xl shrink-0 '>

            <div className='h-[250px] lg:h-[300px] w-full shrink-0'>
                <img
                    src={bgimg}
                    className='w-full h-full object-cover bg-center rounded-2xl'
                    alt={heading}
                />
            </div>

            <div className='flex-1 w-full flex flex-col items-center gap-3 bg-[#0A1117] p-3'>

                <h1 className='text-5xl lg:text-6xl text-[#FAAB3C] font-thin border border-white rounded-full p-3 mt-[-50px] bg-[#0A1117]'>
                    <i className={icon}></i>
                </h1>

                <h1 className='text-xl lg:text-2xl text-center font-serif'>
                    {heading}
                </h1>

                <div className='w-11 h-0.5 bg-[#FAAB3C]'></div>

                <p className='lg:text-base text-center text-zinc-400 '>
                    {paragraph}
                </p>

                <a className='text-md text-[#FAAB3C] mt-auto mb-auto text-xl text-center'>
                    Learn More &nbsp;<i className="ri-arrow-right-long-fill"></i>
                </a>

            </div>
        </div>
    )
}

function OurServices() {
    const caards = [
        {
            id: 1,
            bgimg: img5,
            icon: "ri-scales-3-fill",
            heading: "Civil Litigation",
            paragraph: "Effective legal representation in civil disputes to protect your rights and secure favorable outcomes."
        },
        {
            id: 2,
            bgimg: img6,
            icon: "ri-draft-fill",
            heading: "Contract Drafting",
            paragraph: "Clear, precise, and legally sound contracts tailored to your business and personal needs."
        },
        {
            id: 3,
            bgimg: img7,
            icon: "ri-auction-line",
            heading: "Criminal Defense",
            paragraph: "Strategic defense and aggressive representation to protect your rights and your future."
        },
        {
            id: 4,
            bgimg: img8,
            icon: "ri-group-fill",
            heading: "Familiy Law",
            paragraph: "Compassionate legal support for family matters, including divorce, custody, and more."
        }
    ]

    return (
        <div
            className='w-full min-h-[950px] lg:h-[1000px] bg-center bg-no-repeat bg-cover flex flex-col items-center'
            style={{ backgroundImage: `url(${img4})` }}
        >
            <div className='flex items-center justify-center gap-3'>
                <div className='w-4 h-0.5 bg-[#DA9735] mt-8'></div>
                <h1 className='mt-8 text-md text-[#DA9735] font-bold'>
                    OUR SERVICES
                </h1>
                <div className='mt-8 w-4 h-0.5 bg-[#DA9735]'></div>
            </div>

            <div className='flex items-center justify-center px-4'>
                <h1 className='mt-5 font-medium font-serif text-3xl sm:text-4xl text-center lg:text-6xl lg:w-[900px]'>
                    Comprehensive Legal Solutions Tailored To{" "}
                    <span className='text-[#DA9735]'>Your Needs</span>
                </h1>
            </div>

            <div className='w-15 mt-5 h-0.5 bg-[#DA9735]'></div>

            <p className='text-center text-base sm:text-lg lg:text-xl p-4 lg:w-170'>
                We offer a wide range of legal services designed to protect your rights, resolve your challenges, and help you achieve the best possible outcomes.
            </p>

            <div className='w-full  mt-5 px-4 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-5 lg:gap-2 justify-items-center lg:justify-center items-center'>
                {caards.map((e) => (
                    <Caards
                        key={e.id}
                        bgimg={e.bgimg}
                        icon={e.icon}
                        heading={e.heading}
                        paragraph={e.paragraph}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurServices
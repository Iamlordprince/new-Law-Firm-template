
import img3 from '../assets/img3.png'

function About() {
    return (
        <div className="bg-[#F7F6F4] w-full h-auto flex flex-col lg:flex-row mt-8 mb-2 lg:gap-5">

            {/* Image */}
            <div className=" w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-0">
                <img
                    className="mt-5 mb-8 max-w-full h-auto"
                    src={img3}
                    alt="About our legal team"
                />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 lg:px-0 py-6 lg:py-0">

                <h1 className="text-[#DA9735] text-md">
                    ABOUT US
                </h1>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif mt-5 text-start">
                    We Are Here To Fight <br className="hidden lg:block" />
                    Against <span className="text-[#DA9735]">Any Violence</span>
                </h1>

                <div className="w-20 mt-7 h-1 bg-[#DA9735]"></div>

                <p className="mt-7 text-base sm:text-lg lg:text-xl p-2 text-start w-full  lg:w-[600px]">
                    Our attorneys are the cornrestone of our commitment to providing exceptional legal services. Each member of our team brings a wealth of experience,
                    specialized knowledge, and a deep dedication to achieving the best outcomes for our clients. We pride ourselves on our collaborative approach,
                    ensuring that every case benefits from the collective expertise of our diverse legal team.
                </p>

                {/* Professional Liability */}
                <div className="flex mt-8 lg:mt-10 gap-3 sm:gap-5 items-center">

                    <h1 className="shrink-0 p-2 sm:p-3 shadow-2xl text-5xl sm:text-6xl lg:text-8xl text-[#DA9735] border-2 rounded-full">
                        <i className="ri-scales-3-line"></i>
                    </h1>

                    <div className="w-0.5 h-20 sm:h-25 bg-zinc-400 shrink-0"></div>

                    <div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold">
                            Professional Liability
                        </h1>

                        <div className="w-5 h-0.5 mt-2 mb-2 bg-[#DA9735]"></div>

                        <p className="w-full lg:w-[350px] text-sm sm:text-base text-start">
                            Our experienced attorneys provide reliable representation to protect your rights and minimize legal risks.
                        </p>
                    </div>
                </div>

                {/* Legal Protection */}
                <div className="flex mt-8 lg:mt-10 gap-3 sm:gap-5 items-center">

                    <h1 className="shrink-0 p-2 sm:p-3 shadow-2xl text-5xl sm:text-6xl lg:text-8xl text-[#DA9735] border-2 rounded-full">
                        <i className="ri-auction-fill"></i>
                    </h1>

                    <div className="w-0.5 h-20 sm:h-25 bg-zinc-400 shrink-0"></div>

                    <div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold">
                            Legal Protection
                        </h1>

                        <div className="w-5 h-0.5 mt-2 mb-2 bg-[#DA9735]"></div>

                        <p className="w-full lg:w-[350px] text-sm sm:text-base text-start">
                            We are dedicated to defending your interests and ensuring you receive the justice you deserve.
                        </p>
                    </div>
                </div>

                <button className="bg-[#DA9735] text-white text-base sm:text-xl mt-8 lg:mt-13 w-full sm:w-60 h-13">
                    MORE ABOUT US <i className="ri-arrow-right-line"></i>
                </button>

            </div>
        </div>
    )
}

export default About;

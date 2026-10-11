
import image from '../assets/img2.png';
import 'remixicon/fonts/remixicon.css';

function Home() {
  return (
    <div
      className="grid min-h-[700px] w-full grid-cols-1 items-center gap-8 bg-cover bg-center bg-no-repeat px-5 py-10 sm:px-8 md:px-12 lg:h-[700px] lg:min-h-0 lg:grid-cols-1 lg:gap-2 lg:px-0 lg:py-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Content section */}
      <div className="flex w-full flex-col items-start font-Times sm:max-w-[600px] lg:ml-[1%] lg:w-[45%] lg:max-w-none">
        
        <h1 className="mt-4 rounded-sm bg-[#654E25] p-2 text-sm text-center text-white sm:mt-8 sm:text-base lg:ml-15 lg:mt-20">
          Welcome to Lawustice
        </h1>

        <p className="mt-6 font-serif text-3xl leading-tight text-start text-white sm:text-4xl md:text-5xl lg:ml-15 lg:mt-8 lg:text-6xl">
          Transforming Equity With Precision And{" "}
          <span className="text-[#DC9C3B]">
            Gentle Advocacy
          </span>
        </p>

        <p className="mt-5 text-base leading-relaxed text-start text-zinc-300 sm:text-lg md:text-xl lg:ml-15">
          We provide trusted legal representation
          with a strategic approach, delivering
          clear guidance, strong advocacy,
          and reliable solutions for individuals and
          businesses seeking justice, protection, and
          long-term legal confidence.
        </p>

        <a
          href="#appointment"
          className="mt-8 inline-flex text-center items-center gap-3 rounded-sm bg-[#E3A03E] px-4 py-3 text-lg text-black transition-colors hover:bg-[#d18d2b] sm:text-xl lg:ml-15 lg:mt-15 lg:text-2xl"
        >
          Book Appointment
          <i className="ri-arrow-right-long-line"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;

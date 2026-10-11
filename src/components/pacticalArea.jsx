
function Cards({ bgcolor, icon, heading, paragraph, isThird }) {
    return (
        <div
            className={`w-full max-w-[450px] min-h-[420px] mt-10 p-13 rounded-2xl text-white ${
                isThird ? "text-black" : ""
            }`}
            style={{ backgroundColor: bgcolor }}
        >
            <i
                className={`${icon} border-2 rounded-full p-2 text-7xl text-[#D19337] ${
                    isThird ? "bg-white" : ""
                }`}
            ></i>

            <h1 className={`text-[31px] font-serif font-medium mt-5 ${isThird ? "text-zinc-900" : ""}`}>
                {heading}
            </h1>

            <p className={`text-zinc-400 text-xl mt-5 ${isThird ? "text-zinc-900" : ""}`}>
                {paragraph}
            </p>
        </div>
    );
}

function PracticalArea() {
    const cards = [
        {
            id: 1,
            bgcolor: "#11263B",
            icon: "ri-scales-3-fill",
            heading: "Strategic Legal  Excellence",
            paragraph: "We deliver strategic legal solutions with precision and insight, protecting your rights and achieving the best possible outcomes."
        },
        {
            id: 2,
            bgcolor: "#11263B",
            icon: "ri-shake-hands-line",
            heading: "Trusted Guidance, Personalized Solutions",
            paragraph: "We take the time to understand your unique needs and provide tailored legal strategies with clear communication and dedicated support."
        },
        {
            id: 3,
            bgcolor: "#E29A34",
            icon: "ri-shield-star-line",
            heading: "Proven Results, Lasting Impact",
            paragraph: "Our track record of success reflects our commitment to excellence, integrity, and achieving results that truly make a difference."
        }
    ];

    return (
        <div className="bg-white flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-2 justify-center p-2">
            {cards.map((e, index) => (
                <Cards
                    key={e.id}
                    bgcolor={e.bgcolor}
                    icon={e.icon}
                    heading={e.heading}
                    paragraph={e.paragraph}
                    isThird={index === 2}
                />
            ))}
        </div>
    );
}

export default PracticalArea;

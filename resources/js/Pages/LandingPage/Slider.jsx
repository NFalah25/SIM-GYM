import { useState } from "react";
import Stars from "./Stars";

function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        {
            id: 0,
            text: "“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”",
            name: "Jonathan Edward",
            occupation: "Office Worker",
            imgSrc: "assets/img/Ellipse 5.png",
        },
        {
            id: 1,
            text: "“ Join this fitness member, the best choice that I’ve.",
            name: "Jonathan Edward",
            occupation: "Office Worker",
            imgSrc: "assets/img/Ellipse 5.png",
        },
    ];

    const handleNext = () => {
        if (activeSlide < slides.length - 1) {
            setActiveSlide((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeSlide > 0) {
            setActiveSlide((prev) => prev - 1);
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`w-full flex-none ${index !== activeSlide ? "pointer-events-none opacity-0" : "opacity-100"} transition-opacity duration-500`}
                    >
                        <div className="w-full p-8">
                            <div className="flex min-h-[320px] w-full flex-col gap-3 rounded p-10 outline-dashed outline-[3px] outline-lime-500">
                                <div className="flex w-full justify-end">
                                    <Stars count={5} />
                                </div>
                                <div className="text-lg text-slate-200">
                                    {slide.text}
                                </div>
                                <div className="flex-inline mt-4 items-center gap-4">
                                    <img
                                        src={slide.imgSrc}
                                        alt={slide.name}
                                        className="h-14 w-14 rounded-full object-cover"
                                    />
                                    <div className="mt-2 flex flex-col">
                                        <p className="text-lg font-semibold text-white text-opacity-80">
                                            {slide.name}
                                        </p>
                                        <p className="mt-1 text-base font-medium text-neutral-500">
                                            {slide.occupation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button
                    onClick={handlePrev}
                    disabled={activeSlide === 0}
                    className={`rounded-full bg-slate-950 p-2 ${activeSlide === 0 ? "text-gray-400" : "text-lime-500"} disabled:cursor-not-allowed`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-12 w-12"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    disabled={activeSlide === slides.length - 1}
                    className={`rounded-full bg-slate-950 p-2 ${activeSlide === slides.length - 1 ? "text-gray-400" : "text-lime-500"} disabled:cursor-not-allowed`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-12 w-12"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Slider;

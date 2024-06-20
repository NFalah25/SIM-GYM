import { useState, useEffect, useRef } from "react";
import ButtonNew from "@/Components/ButtonNew";
import Logo from "./Component/Logo";
import Slider from "./LandingPage/Slider";

function Welcome({ program }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div className="mx-auto w-screen max-w-[1440px] bg-slate-950 text-white">
            <header className="sticky top-0 z-10 mx-auto flex w-[90%] items-center justify-between bg-slate-950 p-5">
                <Logo className="h-fit w-24 md:w-auto" />
                <nav className=" hidden items-center gap-20 md:flex">
                    <ul className="flex space-x-10">
                        <li>
                            <a href="#" className="text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#program" className="text-white">
                                Program
                            </a>
                        </li>
                    </ul>
                    <div className="space-x-4">
                        <ButtonNew href={route("login")} variant="secondary">
                            Login
                        </ButtonNew>
                        <ButtonNew href={route("register")}>Register</ButtonNew>
                    </div>
                </nav>
                <div className="flex items-center md:hidden">
                    <div className="relative ml-2 flex gap-4" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center rounded p-2 transition-all duration-300 hover:bg-slate-700 lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                        {dropdownVisible && (
                            <div
                                id="dropdown-profile"
                                className="fixed right-3 mt-10 flex w-[10rem] flex-col gap-2 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2"
                            >
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Home
                                </a>
                                <a
                                    href="#program"
                                    onClick={handleClickOutside}
                                    className="rounded-md px-3 py-2 text-start text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Program
                                </a>
                                <ButtonNew
                                    resizing="full"
                                    href={route("login")}
                                    variant="secondary"
                                >
                                    Login
                                </ButtonNew>
                                <ButtonNew
                                    resizing="full"
                                    href={route("register")}
                                >
                                    Register
                                </ButtonNew>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <section className="mx-auto flex w-[90%] flex-col p-5 text-center md:min-h-[50vh] md:flex-row md:text-left lg:h-[800px]">
                <div className="order-last mb-10 flex flex-col items-center justify-center sm:mb-0 md:order-first md:w-1/2 md:items-start">
                    <h2 className="mb-4 text-5xl font-bold lg:text-8xl lg:leading-tight">
                        Helps for your ideal body fitness
                    </h2>
                    <p className="mb-8 lg:text-2xl lg:leading-snug">
                        Motivate users with benefits and positive reinforcement,
                        and offer modifications and progress tracking.
                    </p>
                    <ButtonNew size="large" href={route("login")}>
                        Start Training
                    </ButtonNew>
                </div>
                <div className="order-first flex md:w-1/2">
                    <img
                        src="assets/img/Right.png"
                        className="h-auto w-full object-contain"
                        alt="Fitness"
                    />
                </div>
            </section>

            <section id="program" className="py-20">
                <h2 className="mb-20 text-center text-5xl font-bold lg:text-6xl">
                    Explore Our Program
                </h2>
                <div className="grid grid-cols-1 gap-10 px-10 pl-20 pr-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {program.map((item, index) => (
                        <div className="rounded-lg border-2 border-dashed border-lime-500 bg-slate-950 p-5">
                            <img
                                src="assets/img/Media Container-3.png"
                                alt="Area Boxing"
                                className="mb-4  sm:block"
                            />
                            <h3 className="mb-2 text-xl font-bold">
                                {item.nama_program}
                            </h3>
                            <p>{item.deskripsi}</p>
                            <p className="mt-2 text-lime-400">
                                Every Sat and Sun at 9 am
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mx-auto w-[90%] p-5 py-20">
                <div className="gap- -50 flex flex-col items-center gap-10 md:flex-row">
                    <div className="flex w-full items-center justify-center lg:p-20">
                        <img
                            src="assets/img/Frame75.png"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                    <div className="flex w-fit flex-col">
                        <h1 className="text-5xl font-bold text-white lg:text-6xl lg:leading-tight">
                            Transform your physique with our fitness program.
                        </h1>
                        <div className="mt-10 flex items-center gap-4">
                            <div className="text-lime-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            <p className="mt-2">Increase Muscle and Strength</p>
                        </div>
                        <div className="mt-4 flex items-center  gap-4">
                            <div className="text-lime-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            <p className="mt-2">Be Healthier than before</p>
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="text-lime-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            <p className="mt-2">Increase Stamina</p>
                        </div>
                        <div className="mt-6 flex gap-4  text-center text-lg font-semibold leading-6 text-white max-md:flex-wrap">
                            <ButtonNew size="large" href={route("register")}>
                                Join now
                            </ButtonNew>
                            <ButtonNew
                                size="large"
                                variant="secondary"
                                href={route("register")}
                            >
                                Contact us
                            </ButtonNew>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto flex w-[90%] flex-col py-20 md:flex-row">
                <div className="mb-10 flex w-full flex-row justify-between gap-10 md:w-1/2 md:flex-col md:gap-40">
                    <h3 className="  text-2xl font-bold text-white md:w-80 md:text-4xl lg:text-5xl lg:leading-tight">
                        What Our Member Say About Us?
                    </h3>
                    <div className="space-y-4 ">
                        <img src="assets/img/Text.png" className="w-32" />
                        <h3 className="text-sm font-medium md:text-lg">
                            10K+ Satisfied Customer
                        </h3>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Slider />
                </div>
            </section>

            <section className="mx-auto mt-20 flex w-[90%] flex-col justify-between gap-5 py-10 md:flex-row ">
                <div className="mb-10 flex flex-col text-sm font-medium leading-5 text-white">
                    <img
                        src="assets/img/zeus 2.png"
                        alt="Zeus Physique"
                        className="w-32 lg:w-40"
                    />
                    <h3 className="mt-4 text-base  sm:w-1/2 md:text-lg">
                        Highlight benefits of each exercise, both physical and
                        mental
                    </h3>
                </div>
                <div className="flex justify-between gap-5 ">
                    <div className="flex flex-col pr-10 text-base text-white">
                        <div className="text-lg font-bold">Support</div>
                        <a href="#" className="mt-2.5 font-medium">
                            FAQ
                        </a>
                        <a href="#" className="mt-4">
                            Support Center
                        </a>
                    </div>
                    <div className="flex flex-col self-start">
                        <h3 className="text-lg font-bold text-white">
                            Social Media
                        </h3>
                        <div className="mt-2.5 flex gap-1 max-md:pr-5">
                            <a href="#">
                                <img
                                    src="assets/img/instagram.png"
                                    className="shrink-10 aspect-square w-10"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="assets/img/Twitter.png"
                                    className="shrink-10 aspect-square w-10"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="assets/img/Facebook.png"
                                    className="shrink-10 aspect-square w-10"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="mx-auto w-[90%] border-t-2 border-t-lime-500 py-5 text-start">
                <div className="flex flex-col items-center justify-between md:flex-row ">
                    <p className="mb-2 flex items-center ">
                        <span className="font-size: x-large;">
                            &copy; &ensp;
                        </span>
                        2024 Zeus Physique
                    </p>
                    <div className="flex items-center gap-10  text-gray-600 ">
                        <a href="#" className="mb-2 sm:mb-0">
                            Term of Use
                        </a>
                        <a href="#" className="mb-2 sm:mb-0 sm:pl-5">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Welcome;
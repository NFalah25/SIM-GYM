import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import Logo from "./Logo";

export default function Header({ user }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownNavigationVisible, setDropdownNavigationVisible] =
        useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const toggleNavigationDropdown = () => {
        setDropdownNavigationVisible(!dropdownNavigationVisible);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownVisible(false);
            setDropdownNavigationVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="flex items-center justify-between h-16 p-10 px-4 bg-slate-800">
                <div className="flex items-center ml-4">
                    <div className="hidden text-lg font-bold text-white md:hidden lg:flex">
                        Zeus Physique
                    </div>
                    <div className="lg:hidden">
                        <Logo />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative flex gap-4 ml-2" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center "
                        >
                            <h6 className="mt-1 font-semibold me-3 text-slate-100">
                                {user || "bejo"}
                            </h6>
                            <img
                                src="https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff"
                                alt="profile"
                                className="w-8 h-8 rounded-full"
                            />
                        </button>
                        <button
                            onClick={toggleNavigationDropdown}
                            className="flex items-center p-2 transition-all duration-300 rounded hover:bg-slate-700 lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="text-white size-6"
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
                                <Link
                                    href="/profile"
                                    className="px-3 py-2 text-sm rounded-md text-slate-100 hover:bg-slate-800"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route("logout")}
                                    method={"post"}
                                    as={"button"}
                                    className="px-3 py-2 text-sm rounded-md text-start text-slate-100 hover:bg-slate-800"
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                        {dropdownNavigationVisible && (
                            <div
                                id="dropdown-profile"
                                className="fixed right-3 mt-10 flex w-[10rem] flex-col gap-2 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2"
                            >
                                <Link
                                    href="/dashboard"
                                    className="px-3 py-2 text-sm rounded-md text-slate-100 hover:bg-slate-800"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/users"
                                    className="px-3 py-2 text-sm rounded-md text-slate-100 hover:bg-slate-800"
                                >
                                    User
                                </Link>
                                <Link
                                    href="/program"
                                    className="px-3 py-2 text-sm rounded-md text-slate-100 hover:bg-slate-800"
                                >
                                    Program
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className="px-3 py-2 text-sm rounded-md text-slate-100 hover:bg-slate-800"
                                >
                                    Transaksi
                                </Link>
                                <Link
                                    href="/jadwal"
                                    className="px-3 py-2 text-sm rounded-md text-slate-100 hover:bg-slate-800"
                                >
                                    Jadwal
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className="px-3 py-2 text-sm rounded-md text-slate-100 hover:bg-slate-800"
                                >
                                    Presensi
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

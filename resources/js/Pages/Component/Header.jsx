import { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import Logo from "./Logo";

export default function Header() {
    const { props } = usePage();
    const { user_name } = props;

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
            <div className="flex h-16 items-center justify-between bg-slate-800 p-10 px-4">
                <div className="ml-4 flex items-center">
                    <div className="hidden text-lg font-bold text-white md:hidden lg:flex">
                        Zeus Physique
                    </div>
                    <div className="lg:hidden">
                        <Logo />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative ml-2 flex gap-4" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center "
                        >
                            <h6 className="me-3 mt-1 font-semibold text-slate-100">
                                {user_name || "bejo"}
                            </h6>
                            <img
                                src="https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff"
                                alt="profile"
                                className="h-8 w-8 rounded-full"
                            />
                        </button>
                        <button
                            onClick={toggleNavigationDropdown}
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
                                <Link
                                    href="/profile"
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route("logout")}
                                    method={"post"}
                                    as={"button"}
                                    className="rounded-md px-3 py-2 text-start text-sm text-slate-100 hover:bg-slate-800"
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
                                    href={route("dashboard")}
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route("langganan")}
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Langganan
                                </Link>
                                <Link
                                    href={route("users.index")}
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    User
                                </Link>
                                <Link
                                    href={route("program.index")}
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Program
                                </Link>
                                <Link
                                    href={route("transaksi.index")}
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Transaksi
                                </Link>
                                <Link
                                    href={route("jadwal.index")}
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                                >
                                    Jadwal
                                </Link>
                                <Link
                                    href={route("presensi")}
                                    className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
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

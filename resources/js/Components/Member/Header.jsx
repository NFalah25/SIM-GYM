import { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const { props } = usePage();
    const { user_name } = props;
    const { auth } = props;

    const imgUrl = auth.user.foto
        ? `/storage/${auth.user.foto}`
        : "/assets/profile_photo/default_photo_profile.jpg";

    const [dropdownNavigationVisible, setDropdownNavigationVisible] =
        useState(false);

    const dropdownRef = useRef(null);

    const toggleNavigationDropdown = () => {
        setDropdownNavigationVisible(!dropdownNavigationVisible);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
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
            <div className="flex h-16 items-center justify-between bg-slate-950 p-10 px-4">
                <div
                    className="relative ml-2 flex w-full justify-between gap-4 lg:mr-8 lg:justify-end"
                    ref={dropdownRef}
                >
                    <div className="flex items-center gap-2">
                        <img
                            src={imgUrl}
                            alt="profile"
                            className="h-11 w-11 rounded-full"
                        />
                        <div className="flex flex-col gap-0">
                            <p className="text-sm font-medium">Hallo</p>
                            <h6 className="text-xl font-semibold text-slate-100">
                                {user_name}
                            </h6>
                        </div>
                    </div>
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

                    {dropdownNavigationVisible && (
                        <div
                            id="dropdown-profile"
                            className="fixed right-3 mt-10 flex w-[10rem] flex-col gap-2 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2"
                        >
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                            >
                                Home
                            </Link>
                            <Link
                                href="/program_catalog"
                                className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                            >
                                Programs
                            </Link>
                            <Link
                                href={route("transaksi.index")}
                                className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                            >
                                History
                            </Link>
                            <Link
                                href={route("presensi")}
                                className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                            >
                                Attendance
                            </Link>
                            <Link
                                href={route("profile.edit")}
                                className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                            >
                                Settings
                            </Link>
                            <Link
                                href={route("logout")}
                                method={"post"}
                                className="rounded-md px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
                            >
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

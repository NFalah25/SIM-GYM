import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";

export default function Header({ user }) {
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
        <>
            <div className="flex h-16 items-center justify-between bg-slate-800 p-10 px-4">
                <div className="flex items-center">
                    <div className="text-lg font-bold text-white">LaraGym</div>
                </div>
                <div className="flex items-center">
                    <div className="relative ml-2 flex" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center"
                        >
                            <h6 className="me-3 mt-1 font-semibold text-slate-100">
                                {user}
                            </h6>
                            <img
                                src="https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff"
                                alt="profile"
                                className="h-8 w-8 rounded-full"
                            />
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
                    </div>
                </div>
            </div>
        </>
    );
}

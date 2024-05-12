import { useState, useEffect, useRef } from 'react';
import { Link } from "@inertiajs/react";

export default function Navbar({ user }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="bg-sky-300 h-16 p-10 flex items-center justify-between px-4">
                <div className="flex items-center">
                    <div className="text-white text-lg font-bold">LaraGym</div>
                </div>
                <div className="flex items-center">
                    <div className="ml-2 flex relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="flex items-center">
                            <h6 className="mt-1 me-3 font-semibold">{user}</h6>
                            <img src="https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff"
                                 alt="profile" className="w-8 h-8 rounded-full"/>
                        </button>
                        {dropdownVisible && (
                            <div id="dropdown-profile"
                                 className="fixed bg-white w-[10rem] right-3 mt-10 px-2 rounded-lg flex flex-col gap-2 py-2">
                                <Link href="/profile" className="text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">Profile</Link>
                                <Link href={route('logout')} method={'post'} as={'button'}
                                      className="text-start text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">Logout</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

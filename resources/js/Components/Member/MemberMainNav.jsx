import NavLink from "@/Components/NavLink";

function MemberMainNav() {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    return (
        <nav>
            <ul className="flex flex-col gap-12">
                <li>
                    <NavLink
                        href={route("dashboard")}
                        active={currentPath === "/member"}
                    >
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href={route("langganan")}
                        active={currentPath === "/langganan"}
                    >
                        <span>Programs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href={route("transaksi.index")}
                        active={currentPath === "/transaksi"}
                    >
                        <span>Histori</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href={route("users")}
                        active={currentPath === "/users"}
                    >
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href={route("program")}
                        active={currentPath === "/program"}
                    >
                        <span>Logout</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MemberMainNav;

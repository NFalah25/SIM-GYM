import NavLink from "@/Components/NavLink";

function MemberMainNav() {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    return (
        <nav>
            <ul className="flex flex-col gap-12">
                <li>
                    <NavLink href="/member" active={currentPath === "/member"}>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href="member/program_catalog"
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

                        href="/update-profile"
                        active={currentPath === "/update-profile"}
                    >
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink href={route("logout")} method={"post"}>
                        <span>Logout</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MemberMainNav;

import NavLink from "@/Components/NavLink";

function MainNav() {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    return (
        <nav>
            <ul className="flex flex-col gap-4">
                <NavLink
                    href={route("dashboard")}
                    active={currentPath === "/dashboard"}
                >
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    href={route("langganan")}
                    active={currentPath === "/langganan"}
                >
                    <span>Subscription</span>
                </NavLink>
                <NavLink
                    href={route("users.index")}
                    active={currentPath === "/users"}
                >
                    <span>User</span>
                </NavLink>
                <NavLink
                    href={route("program.index")}
                    active={currentPath === "/program"}
                >
                    <span>Program</span>
                </NavLink>
                <NavLink href={route("transaksi.index")}>
                    <span>Transaction</span>
                </NavLink>
                <NavLink
                    href={route("jadwal.index")}
                    active={currentPath === "/jadwal"}
                >
                    <span>Schedule</span>
                </NavLink>
                <NavLink
                    href={route("presensi")}
                    active={currentPath === "/presensi"}
                >
                    <span>Attandance</span>
                </NavLink>
            </ul>
        </nav>
    );
}

export default MainNav;

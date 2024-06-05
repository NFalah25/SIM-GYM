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
                    <span>User</span>
                </NavLink>
                <NavLink
                    href={route("users")}
                    active={currentPath === "/users"}
                >
                    <span>User</span>
                </NavLink>
                <NavLink
                    href={route("program")}
                    active={currentPath === "/program"}
                >
                    <span>Program</span>
                </NavLink>
                <NavLink href={route('transaksi.index')}>
                    <span>Transaksi</span>
                </NavLink>
                <NavLink
                    href={route("jadwal")}
                    active={currentPath === "/jadwal"}
                >
                    <span>Jadwal</span>
                </NavLink>
                <NavLink href={route("presensi")} active={currentPath === "/presensi"}>
                    <span>Presensi</span>
                </NavLink>
            </ul>
        </nav>
    );
}

export default MainNav;

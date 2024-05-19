import NavLink from "@/Components/NavLink";

function MainNav() {
    return (
        <nav>
            <ul className="flex flex-col gap-4">
                <NavLink href={route("dashboard")}>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink href={route("dashboard")} active={true}>
                    <span>User</span>
                </NavLink>
                <NavLink href={route("dashboard")}>
                    <span>Program</span>
                </NavLink>
                <NavLink href={route("dashboard")}>
                    <span>Transaksi</span>
                </NavLink>
                <NavLink href={route("dashboard")}>
                    <span>Jadwal</span>
                </NavLink>
                <NavLink href={route("dashboard")}>
                    <span>Presensi</span>
                </NavLink>
            </ul>
        </nav>
    );
}

export default MainNav;

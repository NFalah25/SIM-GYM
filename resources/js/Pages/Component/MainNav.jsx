import NavLink from "@/Components/NavLink";

function MainNav() {
    const currentPath = window.location.pathname;
    console.log(currentPath)

    return (
        <nav>
            <ul className="flex flex-col gap-4">
                <NavLink href={route("dashboard")} active={currentPath === '/dashboard'}>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink href={route("users")} active={currentPath === '/users'}>
                    <span>User</span>
                </NavLink>
                <NavLink href={route("program-fitness")} active={currentPath === '/program-fitness'}>
                    <span>Program</span>
                </NavLink>
                <NavLink href={route("dashboard")}>
                    <span>Transaksi</span>
                </NavLink>
                <NavLink href={route("jadwal-kelas")} active={currentPath === '/jadwal-kelas'}>
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

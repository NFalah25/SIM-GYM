import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";

function MemberMainNav() {
    const { props } = usePage();
    const role = props.role;

    const currentPath = window.location.pathname;
    console.log(currentPath);

    return (
        <nav>
            <ul className="flex flex-col gap-12">
                <li>
                    <NavLink
                        href={route("dashboard")}
                        active={currentPath === "/dashboard"}
                    >
                        <span>Home</span>
                    </NavLink>
                </li>
                {role === "member" && (
                <li>
                    <NavLink
                        href="/program_catalog"
                        active={currentPath === "/program_catalog"}
                    >
                        <span>Programs</span>
                    </NavLink>
                </li>
                )}
                {role === "member" && (
                <li>
                    <NavLink
                        href={route("transaksi.index")}
                        active={currentPath === "/transaksi"}
                    >
                        <span>History</span>
                    </NavLink>
                </li>
                )}
                <li>
                    <NavLink
                        href={route("presensi")}
                        active={currentPath === "/presensi"}
                    >
                        <span>Attendance</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href={route("profile.edit")}
                        active={currentPath === "/profile"}
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

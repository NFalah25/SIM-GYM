import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "font-poppins box-border rounded-lg px-7 py-3 tracking-wider hover:box-content " +
                (active
                    ? "border border-dashed border-green-500 font-semibold text-green-500 "
                    : "text-slate-500 transition-all duration-300 hover:bg-green-500 hover:bg-opacity-25 hover:font-semibold hover:text-slate-200") +
                className
            }
        >
            {children}
        </Link>
    );
}

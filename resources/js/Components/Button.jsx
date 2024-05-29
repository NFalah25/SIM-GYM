
import { Link } from "@inertiajs/react";

function Button({ children, type, route}) {
    let classButton =
        "rounded-lg border border-slate-500 px-4 py-2 hover:bg-slate-700";
    if (type === "add-data")
        classButton =
            "bg-lime-500 text-slate-100 transition-all duration-300 text-lg md:text-xs lg:text-base font-semibold rounded-lg border border-lime-500 px-4 py-2 hover:bg-lime-600";
    if (type === "icon-edit")
        classButton =
            "p-2 hover:bg-slate-700 w-fit rounded transition-all duration-300 hover:text-yellow-500";
    if (type === "icon-view")
        classButton =
            "p-2 hover:bg-slate-700 w-fit rounded transition-all duration-300 hover:text-lime-500";
    if (type === "icon-delete")
        classButton =
            "p-2 hover:bg-slate-700 w-fit rounded transition-all duration-300 hover:text-red-500";
    return (
        <button
            className={classButton}
            onClick={() => (window.location.href = target)}
        >
            {children}
        </button>
    );
}
export default Button;

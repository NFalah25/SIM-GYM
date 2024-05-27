import { Link } from "@inertiajs/react";

function Button({ children, type, route}) {
    let classButton =
        "rounded-lg border border-slate-500 px-4 py-2 hover:bg-slate-700";
    if (type === "add-data")
        classButton =
            "bg-lime-500 text-slate-100 transition-all duration-300 text-lg font-semibold rounded-lg border border-lime-500 px-4 py-2 hover:bg-lime-600";
    return <Link className={classButton} href={route}>{children}</Link>;
}
export default Button;

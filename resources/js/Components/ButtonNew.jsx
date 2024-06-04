import { Link } from "@inertiajs/react";

function ButtonNew({
    type,
    disabled,
    variant,
    size,
    resizing,
    icon,
    onClick,
    children,
    href,
}) {
    const baseClass =
        "inline-flex items-center text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300";
    const variantClass = {
        primary: "text-white bg-lime-500 hover:bg-lime-700 focus:ring-lime-500",
        secondary:
            "text-slate-300 border-[1px] border-slate-500 px-4 py-2 hover:bg-slate-600 hover:text-white focus:ring-slate-400 hover:text-slate-700",
        danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
    };
    const sizeClass = {
        small: "px-2.5 py-1.5 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-6 py-3 text-base",
    };
    const resizingOptions = {
        fill: "w-full", // Jika ingin 100% lebar parent element, gunakan fill
        fixed: "w-fit", // Jika ingin fit ke lebar element, gunakan fixed
    };
    const isIconClass = {
        notIcon: "",
        iconEdit: "text-slate-100 hover:bg-slate-700 hover:text-yellow-500",
        iconDelete: "text-slate-100 hover:bg-slate-700 hover:text-red-500",
    };

    const shouldApplyVariantClass = icon === "notIcon";
    const buttonClass = `${baseClass} ${shouldApplyVariantClass ? variantClass[variant] : ""} ${sizeClass[size]} ${resizingOptions[resizing]} ${isIconClass[icon]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

ButtonNew.defaultProps = {
    type: "button",
    disabled: false,
    variant: "primary",
    size: "medium",
    resizing: "fixed",
    icon: "notIcon",
    onClick: () => {},
    href: null,
};

export default ButtonNew;

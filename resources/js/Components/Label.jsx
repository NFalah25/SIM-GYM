function Label({ value, htmlFor, className = "", ...props }) {
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-sm font-medium text-slate-300 ${className}`}
            {...props}
        >
            {value}
        </label>
    );
}

export default Label;

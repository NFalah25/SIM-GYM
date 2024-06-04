function Input({
    type = "text",
    name,
    id,
    value,
    onChange,
    error,
    placeholder,
    className = "",
    ...props
}) {
    return (
        <div className={`w-full ${className}`}>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-3 text-white"
                {...props}
            />
            {error && <div className="mt-2 text-sm text-red-700">{error}</div>}
        </div>
    );
}

export default Input;

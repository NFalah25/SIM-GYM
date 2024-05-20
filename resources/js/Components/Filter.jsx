function Filter({ options }) {
    const currentFilter = "all";
    return (
        <div className="flex gap-2 rounded-md border border-slate-600 bg-slate-800 p-2">
            {options.map((option) => (
                <button
                    key={option.value}
                    className={`font-poppins rounded-sm px-2 py-1 text-base font-medium transition-colors duration-300 ${
                        currentFilter === option.value
                            ? "bg-slate-600 text-slate-100"
                            : "text-slate-500 hover:bg-slate-600 hover:text-slate-50"
                    }`}
                    disabled={currentFilter === option.value}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}

export default Filter;

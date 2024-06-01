import React from "react";

function SelectItem({ options, currentSort, onSortChange, type }) {
    return (
        <select
            className={`font-poppins rounded-md border border-slate-600 bg-slate-800 py-3 text-base font-medium text-slate-500
            md:py-2 md:text-xs lg:text-base`}
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
        >
            {options.map((option) => (
                <option value={option.value} key={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default SelectItem;

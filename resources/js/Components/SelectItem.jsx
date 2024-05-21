import React from "react";

function SelectItem({ options, type }) {
    return (
        <select
            className={`font-poppins rounded-md border border-slate-600 bg-slate-800 py-3 text-base font-medium
            text-slate-500`}
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

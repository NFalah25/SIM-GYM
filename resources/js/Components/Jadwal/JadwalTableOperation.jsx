import { Link } from "@inertiajs/react";
import SortBy from "../SortBy";

function JadwalTableOperation() {
    return (
        <div className="flex items-center gap-7">
            <SortBy
                options={[
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                    {
                        value: "regularPrice-asc",
                        label: "Sort by price (low first)",
                    },
                    {
                        value: "regularPrice-desc",
                        label: "Sort by price (high first)",
                    },
                    {
                        value: "maxCapacity-asc",
                        label: "Sort by capacity (low first)",
                    },
                    {
                        value: "maxCapacity-desc",
                        label: "Sort by capacity (high first)",
                    },
                ]}
            />
            <Link href={route('jadwal-create')} className={'bg-lime-500 text-slate-100 transition-all duration-300 text-lg md:text-xs lg:text-base font-semibold rounded-lg border border-lime-500 px-4 py-2 hover:bg-lime-600'}>Add Jadwal</Link>
        </div>
    );
}

export default JadwalTableOperation;

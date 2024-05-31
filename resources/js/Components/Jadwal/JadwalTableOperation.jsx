import { Link } from "@inertiajs/react";
import SortBy from "../SortBy";
import ButtonNew from "../ButtonNew";

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
            <ButtonNew href="/jadwal/create">Add Jadwal</ButtonNew>
        </div>
    );
}

export default JadwalTableOperation;

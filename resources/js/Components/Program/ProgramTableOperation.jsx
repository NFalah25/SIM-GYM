import ButtonNew from "../ButtonNew";
// import Filter from "../Filter";
import SortBy from "../SortBy";
import { useState } from "react";
import { router } from "@inertiajs/react";

function ProgramTableOperation({
    basePath,
    sort: initialSort,
}) {
    const [sort, setSort] = useState(initialSort);

    const handleSortChange = (newSort) => {
        setSort(newSort);
        router.get(basePath, { sort: newSort });
    };
    return (
        <div className="flex items-center gap-7">
            {/* <Filter
                options={[
                    { value: "all", label: "All" },
                    { value: "available", label: "Available" },
                    { value: "not-available", label: "Not Available" },
                ]}
            /> */}
            <SortBy
                options={[
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                    {
                        value: "price-asc",
                        label: "Sort by price (low first)",
                    },
                    {
                        value: "price-desc",
                        label: "Sort by price (high first)",
                    },
                ]}
                currentSort={sort}
                onSortChange={handleSortChange}
            />
            <ButtonNew href={"/program/create"} type="add-data">Add Program</ButtonNew>
        </div>
    );
}

export default ProgramTableOperation;

import { useState } from "react";
import { router } from "@inertiajs/react";
import ButtonNew from "../ButtonNew";
import Filter from "../Filter";
import SortBy from "../SortBy";

function LanggananTableOperation({
    basePath,
    filter: initialFilter,
    sort: initialSort,
}) {
    console.log(basePath, initialFilter, initialSort);
    const [filter, setFilter] = useState(initialFilter);
    const [sort, setSort] = useState(initialSort);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        router.get(basePath, { filter: newFilter, sort });
    };

    const handleSortChange = (newSort) => {
        setSort(newSort);
        router.get(basePath, { filter, sort: newSort });
    };
    return (
        <div className="sm flex flex-col items-center gap-3 md:flex-row md:gap-7 lg:flex-row lg:gap-7">
            <Filter
                options={[
                    { value: "all", label: "All" },
                    { value: "active", label: "Active" },
                    { value: "expired", label: "Expired" },
                ]}
                currentFilter={filter}
                onFilterChange={handleFilterChange}
            />
            <SortBy
                options={[
                    { value: "asc", label: "Sort by name (A-Z)" },
                    { value: "desc", label: "Sort by name (Z-A)" },
                ]}
                currentSort={sort}
                onSortChange={handleSortChange}
            />
        </div>
    );
}

export default LanggananTableOperation;

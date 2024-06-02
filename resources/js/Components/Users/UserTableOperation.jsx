import { useState } from "react";
import { router } from "@inertiajs/react";
import ButtonNew from "../ButtonNew";
import Filter from "../Filter";
import SortBy from "../SortBy";

function UserTableOperation({
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
                    { value: "admin", label: "Admin" },
                    { value: "member", label: "Member" },
                    { value: "trainer", label: "Trainer" },
                ]}
                currentFilter={filter}
                onFilterChange={handleFilterChange}
            />
            <SortBy
                options={[
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                ]}
                currentSort={sort}
                onSortChange={handleSortChange}
            />
            <ButtonNew href="/users/create">Add Data User</ButtonNew>
        </div>
    );
}

export default UserTableOperation;

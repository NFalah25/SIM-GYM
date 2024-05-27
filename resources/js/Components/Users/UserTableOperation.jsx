import Button from "../Button";
import Filter from "../Filter";
import SortBy from "../SortBy";

function UserTableOperation() {
    return (
        <div className="sm flex flex-col items-center gap-3 md:flex-row md:gap-7 lg:flex-row lg:gap-7">
            <Filter
                options={[
                    { value: "all", label: "All" },
                    { value: "active", label: "Active" },
                    { value: "non-active", label: "Non Active" },
                ]}
            />
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
            <Button type="add-data" target="/users/create">
                Add Data User
            </Button>
        </div>
    );
}

export default UserTableOperation;

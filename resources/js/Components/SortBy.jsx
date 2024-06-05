import SelectItem from "./SelectItem";
function SortBy({ options, currentSort, onSortChange }) {
    return (
        <SelectItem
            options={options}
            currentSort={currentSort}
            onSortChange={onSortChange}
            type="white"
        />
    );
}

export default SortBy;

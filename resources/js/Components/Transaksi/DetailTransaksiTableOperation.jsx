import Button from "../Button";
import Filter from "../Filter";
import SortBy from "../SortBy";

function DetailTransaksiTableOperation() {
    return (
        <div className="flex items-center gap-7">
            <Filter
                options={[
                    { value: "all", label: "All" },
                    { value: "available", label: "Available" },
                    { value: "not-available", label: "Not Available" },
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
                ]}
            />
            <Button type="add-data" target={'/cetakPdf'}>Cetak Transaksi</Button>
        </div>
    );
}

export default DetailTransaksiTableOperation;

import Button from "../Button";
import Filter from "../Filter";
import SortBy from "../SortBy";

function DetailTransaksiTableOperation() {
    return (
        <div className="flex items-center gap-7">
            <Button type="add-data" target={'/cetakPdf'}>Cetak Transaksi</Button>
        </div>
    );
}

export default DetailTransaksiTableOperation;

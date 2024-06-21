import { usePage } from "@inertiajs/react";
import Button from "../Button";
import Filter from "../Filter";
import SortBy from "../SortBy";

function DetailTransaksiTableOperation() {
    const {props} = usePage();
    const { detail_pembayaran } = props;
    console.log(detail_pembayaran[0].id_transaksi);


    return (
        <div className="flex items-center gap-7">
            <Button type="add-data" target={`/cetakPdf/${detail_pembayaran[0].id_transaksi}`}>Cetak Transaksi</Button>
        </div>
    );
}

export default DetailTransaksiTableOperation;

import Table from "../Table";
import Pagination from "../Pagination";
import TableNewTransaksi from "@/Components/Transaksi/TableNewTransaksi.jsx";

function TransaksiTable({tbody, thead, pagination, basePath}) {
    return (
        <TableNewTransaksi columns="2fr 2fr 1.5fr 1fr 1fr">
            <TableNewTransaksi.Header>

                {thead.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
                <div>Action</div>
            </TableNewTransaksi.Header>
            <TableNewTransaksi.Body tbody={tbody} basePath={basePath} />
            <TableNewTransaksi.Footer>
                <Pagination pagination={pagination} />
            </TableNewTransaksi.Footer>
        </TableNewTransaksi>
    );
}

export default TransaksiTable;

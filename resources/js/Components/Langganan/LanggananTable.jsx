import TableNew from "../TableNew";
import Pagination from "../Pagination";
import TableNewLangganan from "@/Components/Langganan/TableNewTransaksi.jsx";

function LanggananTable({ thead, tbody, basePath, columns, pagination }) {
    return (
        <>
            <TableNewLangganan columns={columns}>
                <TableNewLangganan.Header>
                    {thead.map((column, index) => (
                        <div key={index}>{column}</div>
                    ))}
                </TableNewLangganan.Header>
                <TableNewLangganan.Body tbody={tbody} basePath={basePath} />
                <TableNewLangganan.Footer>
                    <Pagination pagination={pagination} />
                </TableNewLangganan.Footer>
            </TableNewLangganan>
        </>
    );
}

export default LanggananTable;

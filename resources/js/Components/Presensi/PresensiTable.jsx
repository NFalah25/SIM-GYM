import Pagination from "../Pagination";
import TableNew from "../TableNew";
import TableNewPresensi from "@/Components/Presensi/TableNewPresensi.jsx";

function PresensiTable({ thead, tbody, basePath, columns, pagination }) {

    {tbody.map ((item) => (
        console.log (item.id)
    ))}
    return (
        <>
            <TableNewPresensi columns={columns}>
                <TableNewPresensi.Header>
                    {thead.map((column, index) => (
                        <div key={index}>{column}</div>
                    ))}
                </TableNewPresensi.Header>
                <TableNewPresensi.Body tbody={tbody} basePath={basePath} />
                <TableNewPresensi.Footer>
                    <Pagination pagination={pagination} />
                </TableNewPresensi.Footer>
            </TableNewPresensi>
        </>
    );
}

export default PresensiTable;

import Pagination from "../Pagination";
import TableNew from "../TableNew";

function JadwalTable({ thead, tbody, basePath, columns, pagination }) {

    {tbody.map ((item) => (
        console.log (item.id)
    ))}
    return (
        <>
            <TableNew columns={columns}>
                <TableNew.Header>
                    {thead.map((column, index) => (
                        <div key={index}>{column}</div>
                    ))}
                    <div>Action</div>
                </TableNew.Header>
                <TableNew.Body tbody={tbody} basePath={basePath} />
                <TableNew.Footer>
                    <Pagination pagination={pagination} />
                </TableNew.Footer>
            </TableNew>
        </>
    );
}

export default JadwalTable;

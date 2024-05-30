import Pagination from "../Pagination";
import TableNew from "../TableNew";

function JadwalTable({ thead, tbody, basePath, columns }) {
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
                    <Pagination />
                </TableNew.Footer>
            </TableNew>
        </>
    );
}

export default JadwalTable;

import TableNew from "../TableNew";
import Pagination from "../Pagination";

function UserTable({ thead, tbody, basePath, columns, pagination }) {
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

export default UserTable;

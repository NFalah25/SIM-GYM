import Table from "../Table";
import Pagination from "../Pagination";

function JadwalTable({thead, tbody}) {
    return (
        <Table columns="0.5fr 1fr 1fr 1fr 2fr 1fr">
            <Table.Header>
                    {thead.map((column, index) => (
                        <div key={index}>{column}</div>
                    ))}
                <div>Action</div>
            </Table.Header>
            <Table.Body tbody={tbody} />
            <Table.Footer>
                <Pagination />
            </Table.Footer>
        </Table>
    );
}

export default JadwalTable;

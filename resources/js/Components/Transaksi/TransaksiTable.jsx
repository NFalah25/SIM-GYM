import Table from "../Table";
import Pagination from "../Pagination";

function TransaksiTable({tbody, thead}) {
    return (
        <Table columns="2fr 2fr 1.5fr 1fr 1fr 0.5fr">
            <Table.Header>

                {thead.map((item, index) => (
                    <div key={index}>{item}</div>
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

export default TransaksiTable;

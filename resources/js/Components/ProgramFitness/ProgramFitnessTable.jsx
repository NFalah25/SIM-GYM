import Table from "../Table";
import Pagination from "../Pagination";

function ProgramFitnessTable() {
    return (
        <Table columns="2fr 2fr 1.5fr 1fr 1fr 0.5fr">
            <Table.Header>
                <div>Jadwal</div>
                <div>Nama</div>
                <div>Durasi</div>
                <div>Harga</div>
                <div>Desk.</div>
                <div>Action</div>
            </Table.Header>
            <Table.Body data={["api"]} />
            <Table.Footer>
                <Pagination />
            </Table.Footer>
        </Table>
    );
}

export default ProgramFitnessTable;

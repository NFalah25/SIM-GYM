import Table from "../Table";
import Pagination from "../Pagination";

function JadwalTable() {
    return (
        <Table columns="2fr 2fr 1.5fr 1fr 1fr 0.5fr">
            <Table.Header>
                <div>Nomor</div>
                <div>Nama Trainer</div>
                <div>Hari</div>
                <div>Waktu</div>
                <div>Ruangan</div>
                <div>Action</div>
            </Table.Header>
            <Table.Body data={["api"]} />
            <Table.Footer>
                <Pagination />
            </Table.Footer>
        </Table>
    );
}

export default JadwalTable;

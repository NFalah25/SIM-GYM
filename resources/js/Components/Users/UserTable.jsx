import Table from "../Table";
import Pagination from "../Pagination";

function UserTable() {
    return (
        <Table columns="2fr 2fr 1.5fr 1fr 1fr 0.5fr">
            <Table.Header>
                <div>Name</div>
                <div>Email</div>
                <div>Phone Number</div>
                <div>Role</div>
                <div>Status</div>
                <div>Action</div>
            </Table.Header>
            <Table.Body data={["api"]} />
            <Table.Footer>
                <Pagination />
            </Table.Footer>
        </Table>
    );
}

export default UserTable;

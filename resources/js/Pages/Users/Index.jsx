import Row from "@/Components/Row";
import UserTable from "@/Components/Users/UserTable";
import UserTableOperation from "@/Components/Users/UserTableOperation";
import Dashboard from "@/Pages/Dashboard";

function UsersIndex() {
    return (
        <Dashboard>
            <Row orientation="horizontal">
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    All User
                </h2>
                <UserTableOperation />
            </Row>
            <Row>
                <UserTable />
            </Row>
        </Dashboard>
    );
}

export default UsersIndex;

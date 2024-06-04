import Row from "@/Components/Row";
import UserTable from "@/Components/Users/UserTable";
import UserTableOperation from "@/Components/Users/UserTableOperation";
import Dashboard from "@/Pages/Dashboard";

function UsersIndex({
    columns,
    thead,
    tbody,
    basePath,
    pagination,
    filter,
    sort,
}) {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    All User
                </h2>
                <UserTableOperation
                    basePath={basePath}
                    filter={filter}
                    sort={sort}
                />
            </Row>
            <Row>
                <UserTable
                    columns={columns}
                    thead={thead}
                    tbody={tbody}
                    basePath={basePath}
                    pagination={pagination}
                />
            </Row>
        </Dashboard>
    );
}

export default UsersIndex;

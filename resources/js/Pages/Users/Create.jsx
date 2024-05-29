import Row from "@/Components/Row";
import UserForm from "@/Components/Users/UserForm";
import Dashboard from "@/Pages/Dashboard";

function UsersIndex() {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Create User
                </h2>
            </Row>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <UserForm />
            </Row>
        </Dashboard>
    );
}

export default UsersIndex;

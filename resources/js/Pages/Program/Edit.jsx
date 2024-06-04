import Row from "@/Components/Row";
import EditProgramForm from "@/Components/Program/EditProgramForm";
import Dashboard from "@/Pages/Dashboard";

function ProgramIndex() {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="text-2xl font-bold font-poppins text-slate-100">
                    Edit Program
                </h2>
            </Row>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <EditProgramForm
                />
            </Row>
        </Dashboard>
    );
}

export default ProgramIndex;

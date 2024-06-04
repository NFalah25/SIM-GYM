import ProgramForm from "@/Components/Program/ProgramForm";
import Row from "@/Components/Row";
import Dashboard from "@/Pages/Dashboard";

function ProgramCreate() {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="text-2xl font-bold font-poppins text-slate-100">
                    Create Program
                </h2>
            </Row>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <ProgramForm />
            </Row>
        </Dashboard>
    );
}

export default ProgramCreate; 
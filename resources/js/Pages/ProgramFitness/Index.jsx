import Row from "@/Components/Row";
import ProgramFitnessTable from "@/Components/ProgramFitness/ProgramFitnessTable";
import ProgramFitnessTableOperation from "@/Components/ProgramFitness/ProgramFitnessTableOperation";
import Dashboard from "@/Pages/Dashboard";

function ProgramFitnessIndex() {
    return (
        <Dashboard>
            <Row orientation="horizontal">
                <h2 className="text-2xl font-bold font-poppins text-slate-100">
                    Programs
                </h2>
                <ProgramFitnessTableOperation />
            </Row>
            <Row>
                <ProgramFitnessTable />
            </Row>
        </Dashboard>
    );
}

export default ProgramFitnessIndex;

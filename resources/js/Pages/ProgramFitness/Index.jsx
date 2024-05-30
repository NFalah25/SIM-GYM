import Row from "@/Components/Row";
import ProgramFitnessTable from "@/Components/ProgramFitness/ProgramFitnessTable";
import ProgramFitnessTableOperation from "@/Components/ProgramFitness/ProgramFitnessTableOperation";
import Dashboard from "@/Pages/Dashboard";

function ProgramFitnessIndex({ thead, tbody }) {
    return (
        <Dashboard>
            <Row orientation="horizontal" className="flex-col gap-4 md:flex-row lg:flex-row">
                <h2 className="text-2xl font-bold font-poppins text-slate-100">
                    Programs
                </h2>
                <ProgramFitnessTableOperation />
            </Row>
            <Row>
                <ProgramFitnessTable thead={thead} tbody={tbody}/>
            </Row>
        </Dashboard>
    );
}

export default ProgramFitnessIndex;

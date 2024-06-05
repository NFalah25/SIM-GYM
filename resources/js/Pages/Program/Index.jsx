import Row from "@/Components/Row";
import ProgramTable from "@/Components/Program/ProgramTable";
import ProgramTableOperation from "@/Components/Program/ProgramTableOperation";
import Dashboard from "@/Pages/Dashboard";

function ProgramIndex({ columns, thead, tbody, basePath, pagination, sort }) {
    return (
        <Dashboard>
            <Row orientation="horizontal" className="flex-col gap-4 md:flex-row lg:flex-row">
                <h2 className="text-2xl font-bold font-poppins text-slate-100">
                    Programs
                </h2>
                <ProgramTableOperation basePath={basePath} sort={sort}/>
            </Row>
            <Row>
                <ProgramTable thead={thead} tbody={tbody} columns={columns} basePath={basePath} pagination={pagination}/>
            </Row>
        </Dashboard>
    );
}

export default ProgramIndex;

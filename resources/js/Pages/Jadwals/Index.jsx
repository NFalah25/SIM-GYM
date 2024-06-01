import Row from "@/Components/Row";
import JadwalTable from "@/Components/Jadwal/JadwalTable";
import JadwalTableOperation from "@/Components/Jadwal/JadwalTableOperation";
import Dashboard from "@/Pages/Dashboard";

function JadwalIndex({columns, thead, tbody, basePath}) {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Jadwals
                </h2>
                <JadwalTableOperation />
            </Row>
            <Row>
            <JadwalTable
                    columns={columns}
                    thead={thead}
                    tbody={tbody}
                    basePath={basePath}
                />
            </Row>
        </Dashboard>
    );
}

export default JadwalIndex; 
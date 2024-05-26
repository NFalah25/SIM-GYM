import Row from "@/Components/Row";
import JadwalTable from "@/Components/Jadwal/JadwalTable";
import JadwalTableOperation from "@/Components/Jadwal/JadwalTableOperation";
import Dashboard from "@/Pages/Dashboard";

function JadwalIndex() {
    return (
        <Dashboard>
            <Row orientation="horizontal">
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Jadwals
                </h2>
                <JadwalTableOperation />
            </Row>
            <Row>
                <JadwalTable />
            </Row>
        </Dashboard>
    );
}

export default JadwalIndex; 
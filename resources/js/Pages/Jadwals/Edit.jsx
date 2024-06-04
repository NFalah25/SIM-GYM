import Row from "@/Components/Row";
import EditJadwalForm from "@/Components/Jadwal/EditJadwalForm";
import Dashboard from "@/Pages/Dashboard";

function JadwalIndex() {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Edit Jadwal
                </h2>
            </Row>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <EditJadwalForm
                />
            </Row>
        </Dashboard>
    );
}

export default JadwalIndex;

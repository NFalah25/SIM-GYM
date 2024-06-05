import JadwalForm from "@/Components/Jadwal/JadwalForm";
import Row from "@/Components/Row";
import Dashboard from "@/Pages/Dashboard";

function JadwalCreate({user, program}) {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Create Jadwal
                </h2>
            </Row>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <JadwalForm 
                    user={user}
                    program={program}
                />
            </Row>
        </Dashboard>
    );
}

export default JadwalCreate; 
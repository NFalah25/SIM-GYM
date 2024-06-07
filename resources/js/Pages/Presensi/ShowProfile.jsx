import Row from "@/Components/Row";
import ShowFormProfile from "@/Components/Presensi/ShowFormProfile";
import Dashboard from "@/Pages/Dashboard";

function ShowProfile() {
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Profile
                </h2>
            </Row>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <ShowFormProfile />
            </Row>
        </Dashboard>
    );
}

export default ShowProfile;

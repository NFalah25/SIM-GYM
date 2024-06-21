import Row from "@/Components/Row";
import CreatePresensiForm from "@/Components/Presensi/CreateForm.jsx";
import Dashboard from "@/Pages/Dashboard";
import LayoutTrainer from "@/Components/Trainer/LayoutTrainer";

function Create() {
    return (
        <LayoutTrainer>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="text-2xl font-bold font-poppins text-slate-100">
                    Presensi
                </h2>
            </Row>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <CreatePresensiForm />
            </Row>
        </LayoutTrainer>
    );
}

export default Create;

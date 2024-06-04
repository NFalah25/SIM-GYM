import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import PresensiTable from "@/Components/Presensi/PresensiTable.jsx";

function PresentasiIndex({thead, tbody, basePath, columns, pagination}) {
    return (
        <Dashboard>
            <Row>
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    All Presentasi
                </h2>
            </Row>
            <Row>
                <PresensiTable thead={thead} tbody={tbody} basePath={basePath} columns={columns} pagination={pagination} />
            </Row>
        </Dashboard>
    )
}

export default PresentasiIndex;

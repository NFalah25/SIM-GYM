import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import PresensiTable from "@/Components/Presensi/PresensiTable.jsx";
import { usePage } from "@inertiajs/react";
import LayoutMember from "@/Components/Member/LayoutMember";

function PresentasiIndex({ thead, tbody, basePath, columns, pagination }) {
    const { props } = usePage();
    const role = props.role;

    return (
        <>
            {role === "admin" && (
                <Dashboard>
                    <Row>
                        <h2 className="font-poppins text-2xl font-bold text-slate-100">
                            All Presentasi
                        </h2>
                    </Row>
                    <Row>
                        <PresensiTable
                            thead={thead}
                            tbody={tbody}
                            basePath={basePath}
                            columns={columns}
                            pagination={pagination}
                        />
                    </Row>
                </Dashboard>
            )}
            {role === "member" && (
                <LayoutMember>
                    <Row>
                        <h2 className="font-poppins text-2xl font-bold text-slate-100">
                            All Presentasi
                        </h2>
                    </Row>
                    <Row>
                        <PresensiTable
                            thead={thead}
                            tbody={tbody}
                            basePath={basePath}
                            columns={columns}
                            pagination={pagination}
                        />
                    </Row>
                </LayoutMember>
            )}
        </>
    );
}

export default PresentasiIndex;

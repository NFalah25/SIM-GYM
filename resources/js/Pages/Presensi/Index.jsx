import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import PresensiTable from "@/Components/Presensi/PresensiTable.jsx";
import PresensiTableTrainer from "@/Components/Presensi/PresensiTableTrainer.jsx";
import { usePage } from "@inertiajs/react";
import LayoutMember from "@/Components/Member/LayoutMember";
import LayoutTrainer from "@/Components/Trainer/LayoutTrainer";
import TrainerPresensiTableOperation from '@/Components/Presensi/TrainerPresensiTableOperation';

function PresentasiIndex({tbodyTrainer, theadTrainer, thead, tbody, basePath, columns, pagination }) {
    const { props } = usePage();
    const role = props.role;

    return (
        <>
            {role === "admin" && (
                <Dashboard>
                    <Row>
                        <h2 className="text-2xl font-bold font-poppins text-slate-100">
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
                        <h2 className="text-2xl font-bold font-poppins text-slate-100">
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
            {role === "trainer" && (
                <LayoutTrainer>
                    <Row orientation="horizontal" className="flex-col gap-4 md:flex-row lg:flex-row">
                        <h2 className="text-2xl font-bold font-poppins text-slate-100">
                            Presensi Program {props.user_name}
                        </h2>
                        <TrainerPresensiTableOperation />
                    </Row>
                    <Row>
                        <PresensiTableTrainer
                            thead={theadTrainer}
                            tbody={tbodyTrainer}
                            basePath={basePath}
                            columns={columns}
                            pagination={pagination}
                        />
                    </Row>
                </LayoutTrainer>
            )}
        </>
    );
}

export default PresentasiIndex;

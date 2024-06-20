import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import LanggananTableOperation from "@/Components/Langganan/LanggananTableOperation.jsx";
import LanggananTable from "@/Components/Langganan/LanggananTable.jsx";

function LanggananIndex({basePath, filter, sort, columns, thead, tbody, pagination}) {
    return (
        <Dashboard>
            <Row orientation="horizontal"
                 className="flex-col gap-4 md:flex-row lg:flex-row">
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Langganan
                </h2>
                <LanggananTableOperation basePath={basePath} filter={filter} sort={sort}/>
            </Row>
            <Row>
                <LanggananTable columns={columns}
                                thead={thead}
                                tbody={tbody}
                                basePath={basePath}
                                pagination={pagination}/>
            </Row>
        </Dashboard>
    );
}

export default LanggananIndex;

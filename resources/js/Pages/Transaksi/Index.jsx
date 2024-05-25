import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import TransaksiTable from "@/Components/Transaksi/TransaksiTable.jsx";
import TransaksiTableOperation from "@/Components/Transaksi/TransaksiTableOperation.jsx";

function TransaksiIndex({tbody, thead}){
    return (
        <Dashboard>
            <Row orientation="horizontal">
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    All Transaksi
                </h2>
                <TransaksiTableOperation/>
            </Row>
            <Row>
                <TransaksiTable tbody={tbody} thead={thead} />
            </Row>

        </Dashboard>
    )
}

export default TransaksiIndex;

import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import TransaksiTable from "@/Components/Transaksi/TransaksiTable.jsx";
import TransaksiTableOperation from "@/Components/Transaksi/TransaksiTableOperation.jsx";
import Label from "../Component/Label";
import Input from "../Component/Input";
import { Link } from "@inertiajs/react";

function TransaksiIndex({ tbody, thead }) {
    return (
        <Dashboard>
            <Row orientation="horizontal">
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    All Transaksi
                </h2>
                <TransaksiTableOperation />
            </Row>
            <Row>
                <div className="p-4 border-b border-gray-600 bg-slate-700 text-slate-300 rounded-md">
                    <div className="text-lg mb-4">
                        <h2>Filter Laporan</h2>
                    </div>
                    <div className="md:flex">
                        <div className="md:w-1/3 md:pe-4">
                            <Label value="Mulai Tanggal" />
                            <Input type="date" />
                        </div>
                        <div className="md:w-1/3 md:ps-4 md:pe-2">
                            <Label value="Sampai Tanggal" />
                            <Input type="date" />
                        </div>
                        <div className="md:w-1/3 md:flex h-full items-center md:ps-4 justify-evenly">
                            <div className="py-6">
                                <button className="bg-lime-500 text-slate-100 transition-all duration-300 text-lg md:text-xs lg:text-base font-semibold rounded-lg border border-lime-500 px-4 py-2 hover:bg-lime-600">
                                    Filter
                                </button>
                            </div>
                            <div className="bg-lime-500 text-slate-100 transition-all duration-300 text-lg md:text-xs lg:text-base font-semibold rounded-lg border border-lime-500 px-4 py-2 hover:bg-lime-600 ">
                                <Link>Reset</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <TransaksiTable tbody={tbody} thead={thead} />
            </Row>
        </Dashboard>
    );
}

export default TransaksiIndex;

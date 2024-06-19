import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import TransaksiTable from "@/Components/Transaksi/TransaksiTable.jsx";
import TransaksiTableOperation from "@/Components/Transaksi/TransaksiTableOperation.jsx";
import Label from "../Component/Label";
import Input from "../Component/Input";
import { Link, useForm, usePage } from "@inertiajs/react";
import { usePDF } from "react-to-pdf";
import Button from "@/Components/Button";

function TransaksiIndex({
    tbody,
    thead,
    pagination,
    mulai_tanggal,
    sampai_tanggal,
    basePath
}) {
    const {props} = usePage();
    const {role} = props;

    const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

    const { data, setData, get, errors, reset } = useForm({
        mulai_tanggal: mulai_tanggal || "",
        sampai_tanggal: sampai_tanggal || "",
    });

    function submit(e) {
        e.preventDefault();
        get("/transaksi");
    }

    function onClickReset() {
        reset("mulai_tanggal", "sampai_tanggal");
        get("/transaksi");
    }

    function halamanPrint(e) {
        e.preventDefault();
        get("/cetakPdf");
    }

    return (
        <Dashboard>
            <Row orientation="horizontal">
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    All Transaksi
                </h2>
                {role === "admin" &&
                <form onSubmit={halamanPrint}>
                <input
                    className="hidden"
                    type="date"
                    value={data.mulai_tanggal}
                    id="mulai_tanggal"
                    name="mulai_tanggal"
                    onChange={(e) =>
                        setData("mulai_tanggal", e.target.value)
                    }
                />
                <input
                    className="hidden"
                    type="date"
                    value={data.sampai_tanggal}
                    id="sampai_tanggal"
                    name="sampai_tanggal"
                    onChange={(e) =>
                        setData("sampai_tanggal", e.target.value)
                    }
                />
                <button
                    className="bg-lime-500 text-slate-100 transition-all duration-300 text-lg md:text-xs lg:text-base font-semibold rounded-lg border border-lime-500 px-4 py-2 hover:bg-lime-600"
                    type="submit"
                >
                    Cetak Transaksi
                </button>
            </form>
                }
                </Row>
            {role === "admin" &&
            <Row>
            {/* button onclick print to pdf */}
            <form
                onSubmit={submit}
                className="p-4 border-b border-gray-600 bg-slate-700 text-slate-300 rounded-md"
            >
                <div className="text-lg mb-4">
                    <h2>Filter Laporan</h2>
                </div>
                <div className="md:flex">
                    <div className="md:w-2/5 md:pe-4">
                        <Label value="Mulai Tanggal" />
                        <Input
                            type="date"
                            value={data.mulai_tanggal}
                            name={"mulai_tanggal"}
                            id={"mulai_tanggal"}
                            onChange={(e) =>
                                setData("mulai_tanggal", e.target.value)
                            }
                        />
                    </div>
                    <div className="md:w-2/5 md:ps-4 md:pe-2">
                        <Label value="Sampai Tanggal" />
                        <Input
                            type="date"
                            value={data.sampai_tanggal}
                            id={"sampai_tanggal"}
                            name={"sampai_tanggal"}
                            onChange={(e) =>
                                setData("sampai_tanggal", e.target.value)
                            }
                        />
                    </div>
                    <div className="md:w-1/5 flex h-full items-center md:ps-4 justify-evenly">
                        <div className="py-6">
                            <button className="bg-lime-500 text-slate-100 transition-all duration-300 text-lg md:text-xs lg:text-base font-semibold rounded-lg border border-lime-500 px-4 py-2 hover:bg-lime-600">
                                Filter
                            </button>
                        </div>
                        <div className="py-6">
                            <button
                                className="bg-slate-400 text-slate-100 transition-all duration-300 text-lg md:text-xs lg:text-base font-semibold rounded-lg border border-slate-400 px-4 py-2 hover:bg-lime-600"
                                type="reset"
                                onClick={onClickReset}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            </Row>
            }
            <Row>
                <TransaksiTable
                    tbody={tbody}
                    thead={thead}
                    pagination={pagination}
                    basePath={basePath}
                />
            </Row>
        </Dashboard>
    );
}

export default TransaksiIndex;

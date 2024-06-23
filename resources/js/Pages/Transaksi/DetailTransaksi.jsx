import detailTransaksiTableOperation from "@/Components/Transaksi/DetailTransaksiTableOperation.jsx";
import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import DetailTransaksiTableOperation from "@/Components/Transaksi/DetailTransaksiTableOperation.jsx";
import { usePage } from "@inertiajs/react";
import LayoutMember from "@/Components/Member/LayoutMember";

function DetailTransaksi() {
    // props
    const { props } = usePage();
    const role = props.role;
    const detail_pembelian = props.detail_pembelian;
    const detail_pembayaran = props.detail_pembayaran;
    console.log(detail_pembelian);
    return (
        <>
            {role === "admin" && (
                <Dashboard>
                    <Row
                        orientation="horizontal"
                        className="flex-col gap-4 md:flex-row lg:flex-row"
                    >
                        <h2 className="font-poppins text-2xl font-bold text-slate-100">
                            Transaction Details
                        </h2>
                        <DetailTransaksiTableOperation />
                    </Row>
                    <Row
                        className={
                            "text-sm text-white bg-slate-600 rounded p-5 md:grid md:grid-cols-2"
                        }
                    >
                        {detail_pembelian.map((item, index) => (
                            <div className={"mb-6"}>
                                <div className={"w-1/2 mb-4 font-bold text-lg"}>
                                    <h3 className={"text-white "}>
                                        Purchase Details
                                    </h3>
                                </div>
                                <div className={"mb-4"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Program ID
                                    </h4>
                                    <p>{item.id_program}</p>
                                </div>
                                <div className={"flex mb-4"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Program Name
                                        </h4>
                                        <p>{item.nama_program}</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Unit Price
                                        </h4>
                                        <p>{item.harga}</p>
                                    </div>
                                </div>
                                <div className={"flex"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Program Duration
                                        </h4>
                                        <p>{item.durasi} Hari</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Validity Period
                                        </h4>
                                        <p>{item.tanggal_mulai}</p>{" "}
                                        <p>{item.tanggal_akhir}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {detail_pembayaran.map((item, index) => (
                            <div className={"mb-6"}>
                                <div className={"w-1/2 mb-4 font-bold text-lg"}>
                                    <h3 className={"text-white "}>
                                        Payment Details
                                    </h3>
                                </div>
                                <div className={"mb-4"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Transaction ID
                                    </h4>
                                    <p>TRZ-{item.id_transaksi}</p>
                                </div>
                                <div className={"flex mb-4"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            User Name
                                        </h4>
                                        <p>{item.nama_user}</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Transaction Date
                                        </h4>
                                        <p>{item.tanggal_transaksi}</p>
                                    </div>
                                </div>
                                <div className={"flex mb-4"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Address
                                        </h4>
                                        <p>{item.alamat}</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Transaction Status
                                        </h4>
                                        <p>{item.status}</p>
                                    </div>
                                </div>
                                <div className={"w-1/2 mt-10"}>
                                    <h4
                                        className={
                                            "text-xl font-bold mb-2 text-lime-500"
                                        }
                                    >
                                        Total Price
                                    </h4>
                                    <p
                                        className={
                                            "text-lg font-semibold text-yellow-500"
                                        }
                                    >
                                        {item.total_harga}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Dashboard>
            )}
            {role === "member" && (
                <LayoutMember>
                    <Row
                        orientation="horizontal"
                        className="flex-col gap-4 md:flex-row lg:flex-row"
                    >
                        <h2 className="font-poppins text-2xl font-bold text-slate-100">
                            Transaction Details
                        </h2>
                        <DetailTransaksiTableOperation />
                    </Row>
                    <Row
                        className={
                            "text-sm text-white bg-slate-600 rounded p-5 md:grid md:grid-cols-2"
                        }
                    >
                        {detail_pembelian.map((item, index) => (
                            <div className={"mb-6"}>
                                <div className={"w-1/2 mb-4 font-bold text-lg"}>
                                    <h3 className={"text-white "}>
                                        Purchase Details
                                    </h3>
                                </div>
                                <div className={"mb-4"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Program ID
                                    </h4>
                                    <p>{item.id_program}</p>
                                </div>
                                <div className={"flex mb-4"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Program Name
                                        </h4>
                                        <p>{item.nama_program}</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Unit Price
                                        </h4>
                                        <p>{item.harga}</p>
                                    </div>
                                </div>
                                <div className={"flex"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Program Duration
                                        </h4>
                                        <p>{item.durasi} Hari</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Validity Period
                                        </h4>
                                        <p>{item.tanggal_mulai}</p>{" "}
                                        <p>{item.tanggal_akhir}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {detail_pembayaran.map((item, index) => (
                            <div className={"mb-6"}>
                                <div className={"w-1/2 mb-4 font-bold text-lg"}>
                                    <h3 className={"text-white "}>
                                        Payment Details
                                    </h3>
                                </div>
                                <div className={"mb-4"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Transaction ID
                                    </h4>
                                    <p>TRZ-{item.id_transaksi}</p>
                                </div>
                                <div className={"flex mb-4"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            User Name
                                        </h4>
                                        <p>{item.nama_user}</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Transaction Date
                                        </h4>
                                        <p>{item.tanggal_transaksi}</p>
                                    </div>
                                </div>
                                <div className={"flex mb-4"}>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Address
                                        </h4>
                                        <p>{item.alamat}</p>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <h4
                                            className={"text-sm font-bold mb-2"}
                                        >
                                            Transaction Status
                                        </h4>
                                        <p>{item.status}</p>
                                    </div>
                                </div>
                                <div className={"w-1/2 mt-10"}>
                                    <h4
                                        className={
                                            "text-xl font-bold mb-2 text-lime-500"
                                        }
                                    >
                                        Total Price
                                    </h4>
                                    <p
                                        className={
                                            "text-lg font-semibold text-yellow-500"
                                        }
                                    >
                                        {item.total_harga}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Row>
                </LayoutMember>
            )}
        </>
    );
}

export default DetailTransaksi;

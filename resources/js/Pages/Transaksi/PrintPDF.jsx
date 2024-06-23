import { usePDF } from "react-to-pdf";
import Logo from "../Component/Logo";
import Row from "@/Components/Row";
import { usePage } from "@inertiajs/react";
import Row from "@/Components/Row";
import { usePage } from "@inertiajs/react";

function PrintPDF() {
    const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
    const { props } = usePage();
    const detail_pembelian = props.detail_pembelian;
    const detail_pembayaran = props.detail_pembayaran;

    return (
        <>
            {/* <div> */}
            {/* button auto klik to pdf ketika load */}
            {/* <button onClick={() => toPDF()}>Print to PDF</button> */}
            {/* <button onClick={() => toPDF()}>Print to PDF</button> */}

            {/*<div ref={targetRef} className="py-8 px-24">
            {/*<div ref={targetRef} className="py-8 px-24">
                <div className="text-center">
                    <h1 className="text-xl font-bold justify-center">
                        CV. Zeus Physique
                    </h1>
                    <h1 className="text-3xl font-bold">Laporan Transaksi</h1>
                    <p className="leading-8">
                        Periode 1 Januari 2018 s.d 31 Januari 2018
                    </p>
                </div>
                <div className="mt-4">
                    <table className="w-full leading-10 border-collapse border border-black">
                        <thead>
                            <tr className="">
                                {/* <th className="border border-black mt-0 pt-0">No</th>
                                <th className="border border-black">Nama</th>
                                <th className="border border-black">Alamat</th>
                                <th className="border border-black">Telepon</th>
                                <th className="border border-black">Email</th>
                                <th className="border border-black">
                                    Total Transaksi
                                </th> */}
            {/* {thead.map((item, index) => (
                                    <th
                                        key={index}
                                        className="border border-black"
                                    >
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>*/}
            {/*
                        <tbody className="text-center">
                            {tbody.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="border border-black">{row.nama}</td>
                                    <td className="border border-black">{row.tanggal}</td>
                                    <td className="border border-black">{row.harga}</td>
                                    <td className="border border-black">{row.tipe}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
             */}

            {/* <>
            <Row className={'text-sm text-white bg-slate-600 rounded p-5 md:grid md:grid-cols-2'} ref={targetRef}>
                {detail_pembelian.map((item, index) => (

                <div className={'mb-6'}>
                    <div className={'w-1/2 mb-4 font-bold text-lg'}>
                        <h3 className={'text-white '}>Detail Pembelian</h3>
                    </div>
                    <div className={'mb-4'}>
                        <h4 className={'text-sm font-bold mb-2'}>ID Program</h4>
                        <p>{item.id_program}</p>
                    </div>
                    <div className={'flex mb-4'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Nama Program</h4>
                            <p>{item.nama_program}</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Harga Satuan</h4>
                            <p>{item.harga}</p>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Durasi Program</h4>
                            <p>{item.durasi} Hari</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Masa Berlaku</h4>
                            <p>{item.tanggal_mulai}</p> <p>{item.tanggal_akhir}</p>
                        </div>
                    </div>
                </div>
                ))}
                {detail_pembayaran.map((item, index) => (

                <div className={'mb-6'}>
                    <div className={'w-1/2 mb-4 font-bold text-lg'}>
                        <h3 className={'text-white '}>Detail Pembayaran</h3>
                    </div>
                    <div className={'mb-4'}>
                        <h4 className={'text-sm font-bold mb-2'}>ID Transaksi</h4>
                        <p>TRZ-{item.id_transaksi}</p>
                    </div>
                    <div className={'flex mb-4'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Nama User</h4>
                            <p>{item.nama_user}</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Tanggal Transaksi</h4>
                            <p>{item.tanggal_transaksi}</p>
                        </div>
                    </div>
                    <div className={'flex mb-4'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Alamat</h4>
                            <p>{item.alamat}</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Status Transaksi</h4>
                            <p>{item.status}</p>
                        </div>
                    </div>
                    <div className={'w-1/2 mt-10'}>
                        <h4 className={'text-xl font-bold mb-2 text-lime-500'}>Total Harga</h4>
                        <p className={'text-lg font-semibold text-yellow-500'}>{item.total_harga}</p>
                    </div>
                </div>
                ))}

            </Row>
        </> */}

            {/* </div> */}
            <div>
                <button onClick={() => toPDF()} className="text-white">Cetak Bukti</button>
                <div
                    ref={targetRef}
                    className={
                        "text-sm text-black bg-white rounded p-5 md:grid md:grid-cols-2 border-2 border-black mb-5 flex flex-col gap-7"
                    }
                >
                    {detail_pembelian.map((item, index) => (
                        <div className={"mb-6"} key={item.id_program}>
                            <div className={"w-1/2 mb-4 font-bold text-lg"}>
                                <h3 className={""}>Detail Pembelian</h3>
                            </div>
                            <div className={"mb-4"}>
                                <h4 className={"text-sm font-bold mb-2"}>
                                    ID Program
                                </h4>
                                <p>{item.id_program}</p>
                            </div>
                            <div className={"flex mb-4"}>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Nama Program
                                    </h4>
                                    <p>{item.nama_program}</p>
                                </div>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Harga Satuan
                                    </h4>
                                    <p>{item.harga}</p>
                                </div>
                            </div>
                            <div className={"flex"}>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Durasi Program
                                    </h4>
                                    <p>{item.durasi} Hari</p>
                                </div>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Masa Berlaku
                                    </h4>
                                    <p>{item.tanggal_mulai}</p>{" "}
                                    <p>{item.tanggal_akhir}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {detail_pembayaran.map((item, index) => (
                        <div className={"mb-6"} key={item.id_transaksi}>
                            <div className={"w-1/2 mb-4 font-bold text-lg"}>
                                <h3 className={"text-white "}>
                                    Detail Pembayaran
                                </h3>
                            </div>
                            <div className={"mb-4"}>
                                <h4 className={"text-sm font-bold mb-2"}>
                                    ID Transaksi
                                </h4>
                                <p>TRZ-{item.id_transaksi}</p>
                            </div>
                            <div className={"flex mb-4"}>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Nama User
                                    </h4>
                                    <p>{item.nama_user}</p>
                                </div>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Tanggal Transaksi
                                    </h4>
                                    <p>{item.tanggal_transaksi}</p>
                                </div>
                            </div>
                            <div className={"flex mb-4"}>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Alamat
                                    </h4>
                                    <p>{item.alamat}</p>
                                </div>
                                <div className={"w-1/2"}>
                                    <h4 className={"text-sm font-bold mb-2"}>
                                        Status Transaksi
                                    </h4>
                                    <p>{item.status}</p>
                                </div>
                            </div>
                            <div className={"w-1/2 mt-10"}>
                                <h4
                                    className={
                                        "text-xl font-bold mb-2 "
                                    }
                                >
                                    Total Harga
                                </h4>
                                <p
                                    className={
                                        "text-lg font-semibold text-lime-500"
                                    }
                                >
                                    {item.total_harga}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PrintPDF;

// function PrintPDF(){
//     return (
//         <div>
//             <div>
//                 Content to be generated to PDF
//             </div>
//         </div>
//     )
// }
//
// export default PrintPDF;

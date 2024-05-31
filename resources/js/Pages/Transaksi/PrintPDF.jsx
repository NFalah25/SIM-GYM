import { usePDF } from "react-to-pdf";
import Logo from "../Component/Logo";

function PrintPDF({ thead, tbody }) {
    const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
    console.log(tbody);
    return (
        <div>
            {/* button auto klik to pdf ketika load */}
            <button onClick={toPDF}>Print to PDF</button>

            <div ref={targetRef} className="py-8 px-24">
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
                                {thead.map((item, index) => (
                                    <th
                                        key={index}
                                        className="border border-black"
                                    >
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
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
        </div>
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

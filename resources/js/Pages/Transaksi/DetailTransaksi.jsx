import detailTransaksiTableOperation from "@/Components/Transaksi/DetailTransaksiTableOperation.jsx";
import Dashboard from "@/Pages/Dashboard.jsx";
import Row from "@/Components/Row.jsx";
import DetailTransaksiTableOperation from "@/Components/Transaksi/DetailTransaksiTableOperation.jsx";

function DetailTransaksi() {
    return (
        <Dashboard>
            <Row orientation="horizontal"
                 className="flex-col gap-4 md:flex-row lg:flex-row">
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Detail Transaksi
                </h2>
                <DetailTransaksiTableOperation/>
            </Row>
            <Row className={'text-sm text-white bg-slate-600 rounded p-5 md:grid md:grid-cols-2'}>
                <div className={'mb-6'}>
                    <div className={'w-1/2 mb-4 font-bold text-lg'}>
                        <h3 className={'text-white '}>Detail Pembelian</h3>
                    </div>
                    <div className={'mb-4'}>
                        <h4 className={'text-sm font-bold mb-2'}>ID Program</h4>
                        <p>P-750</p> <p>P-442</p>
                    </div>
                    <div className={'flex mb-4'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Nama Program</h4>
                            <p>Zumba</p> <p>Senam Aerobik</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Harga Satuan</h4>
                            <p>Rp 20.000</p> <p>Rp 40.000</p>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Durasi Program</h4>
                            <p>1 Hari</p> <p>1 Hari</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Masa Berlaku</h4>
                            <p>31 Mei 2024 - 1 Juni 2024</p> <p>31 Mei 2024 - 1 Juni 2024</p>
                        </div>
                    </div>
                </div>
                <div className={'mb-6'}>
                    <div className={'w-1/2 mb-4 font-bold text-lg'}>
                        <h3 className={'text-white '}>Detail Pembayaran</h3>
                    </div>
                    <div className={'mb-4'}>
                        <h4 className={'text-sm font-bold mb-2'}>ID Transaksi</h4>
                        <p>TRZ-750</p> <p>TRZ-442</p>
                    </div>
                    <div className={'flex mb-4'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Nama User</h4>
                            <p>User 1</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Tanggal Transaksi</h4>
                            <p>31 Mei 2024</p>
                        </div>
                    </div>
                    <div className={'flex mb-4'}>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Alamat</h4>
                            <p>Jl. Raya Kedung Baruk No. 1</p>
                        </div>
                        <div className={'w-1/2'}>
                            <h4 className={'text-sm font-bold mb-2'}>Status Transaksi</h4>
                            <p>Lunas</p>
                        </div>
                    </div>
                    <div className={'w-1/2'}>
                        <h4 className={'text-lg font-bold mb-2'}>Total Harga</h4>
                        <p>Rp 20.000</p> <p>Rp 40.000</p>
                    </div>
                </div>

            </Row>
        </Dashboard>
    );
}

export default DetailTransaksi;

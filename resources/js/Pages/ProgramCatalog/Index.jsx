import axios from "axios";
import { useState } from "react";
import Row from "@/Components/Row";
import LayoutMember from "../../Components/Member/LayoutMember";
import ProgramCatalogCard from "@/Components/ProgramCatalog/ProgramCatalogCard";
import ConfirmModal from "@/Components/ConfirmModal";
import { toast } from "react-toastify";

function Home({ programs }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    async function confirmClick() {
        try {
            const response = await axios.post(
                "/program_catalog/purchase",
                {
                    id_program: selectedProgram.id,
                    nama_program: selectedProgram.nama_program,
                    durasi: selectedProgram.durasi,
                    total_harga: selectedProgram.harga,
                },
            );
            const { snap_token } = response.data;

            window.snap.pay(snap_token, {
                onSuccess: function (result) {
                    toast.success("Pembayaran berhasil!");
                },
                onPending: function (result) {
                    toast("Menunggu pembayaran Anda.", {
                        icon: "⏳",
                    });
                },
                onError: function (result) {
                    toast.error("Pembayaran gagal.");
                },
                onClose: function () {
                    toast.error(
                        "Anda menutup popup tanpa menyelesaikan pembayaran.",
                    );
                },
            });
        } catch (error) {
            console.error("Error during payment:", error);
        } finally {
            setIsModalOpen(false);
        }
    }

    function handlePurchase(program) {
        setSelectedProgram(program);
        setIsModalOpen(true);
    }

    return (
        <LayoutMember>
            <Row>
                <h2 className="text-3xl font-extrabold text-slate-100 md:text-4xl lg:text-5xl">
                    Our Programs
                </h2>
            </Row>
            <div className="mt-10 box-border grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {programs.map((program) => (
                    <ProgramCatalogCard
                        onClick={() => handlePurchase(program)}
                        key={program.id}
                        program={program.nama_program}
                        jadwal={`${program.durasi} hari`}
                        price={`Rp${program.harga}`}
                    />
                ))}
            </div>
            <ConfirmModal
                title="Konfirmasi Pembelian"
                message={`Apakah Anda yakin ingin membeli program ${selectedProgram ? selectedProgram.nama_program + " " + selectedProgram.durasi + " hari" : ""}?`}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmClick}
                confirmButton="Beli"
                confirmColor="info"
            />
        </LayoutMember>
    );
}

export default Home;
